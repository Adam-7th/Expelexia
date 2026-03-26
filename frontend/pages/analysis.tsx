import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import AnalysisCard from '../components/AnalysisCard';
import SummaryTable from '../components/SummaryTable';
import Notifications from '../components/Notifications';
import {
  analyzeFile,
  fetchDashboard,
  generateReport,
  buildDownloadUrl,
  clearNewFileTag,
  fetchAvailableFilesDetailed,
  getAnalysisUpdates,
  getFileHistory,
  getNewFileTag,
  recordAnalysisUpdate,
} from '../utils/api';

const Charts = dynamic(() => import('../components/Charts'), { ssr: false });

type AnalysisState = {
  summary_json?: {
    metadata?: {
      rows?: number;
      columns?: number;
    };
    stats?: Record<string, { mean?: number }>;
  };
};

type DashboardState = {
  data_type?: string;
  text_explanation?: string;
  recommendations?: string;
  data_change_explanation?: string;
  chart_explanation?: string;
  technical_review?: string;
  technical_recommendations?: string;
  document_notes?: string;
  microsoft_link?: string;
  table_preview?: Array<Array<string | number>>;
  charts_data?: {
    line?: Array<{ metric: string; points?: Array<{ x: string | number; y: number }> }>;
    pie?: Array<{ label: string; value: number }>;
  };
};

type ReportState = {
  reportUrl: string;
  downloadUrl: string;
};

export default function AnalysisPage() {
  const [fileName, setFileName] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('expelexia-last-file') || 'IOT-temp.csv' : 'IOT-temp.csv'));
  const [fileHistory, setFileHistory] = useState<string[]>([]);
  const [fileSources, setFileSources] = useState<Record<string, 'local' | 'azure' | 'both' | 'history'>>({});
  const [analysisUpdates, setAnalysisUpdates] = useState<Array<{ fileName: string; lastAnalyzedAt: string }>>([]);
  const [newFileTag, setNewFileTag] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisState | null>(null);
  const [dashboard, setDashboard] = useState<DashboardState | null>(null);
  const [reportData, setReportData] = useState<ReportState | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const metadata = analysis?.summary_json?.metadata || {};

  useEffect(() => {
    const initialize = async () => {
      const history = getFileHistory();
      const lastFile = localStorage.getItem('expelexia-last-file') || '';
      const newTag = getNewFileTag();
      let remoteFiles: Array<{ name: string; in_azure?: boolean; in_local?: boolean; source: 'local' | 'azure' | 'both' }> = [];

      try {
        remoteFiles = await fetchAvailableFilesDetailed();
      } catch {
        remoteFiles = [];
      }

      const sourceMap: Record<string, 'local' | 'azure' | 'both' | 'history'> = {};
      remoteFiles.forEach((item) => {
        sourceMap[item.name] = item.source;
      });

      // Restrict to Azure-only files
      const azureFiles = remoteFiles.filter((item) => item.in_azure).map((item) => item.name);
      azureFiles.forEach((name) => {
        if (!sourceMap[name]) {
          sourceMap[name] = 'history';
        }
      });
      setFileHistory(azureFiles);
      setFileSources(sourceMap);
      setNewFileTag(newTag);
      setAnalysisUpdates(getAnalysisUpdates());

      if (lastFile && azureFiles.includes(lastFile)) {
        setFileName(lastFile);
      } else if (azureFiles.length) {
        setFileName(azureFiles[0]);
      }
    };

    initialize();
  }, []);

  const statsCards = useMemo(
    () => [
      { title: 'Rows', value: metadata.rows ?? '-' },
      { title: 'Columns', value: metadata.columns ?? '-' },
      { title: 'Data Type', value: dashboard?.data_type ?? '-' },
    ],
    [metadata.rows, metadata.columns, dashboard?.data_type]
  );

  const runAnalysis = async () => {
    setLoading(true);
    setError('');
    try {
      const [analysisResult, dashboardResult] = await Promise.all([
        analyzeFile(fileName),
        fetchDashboard(fileName),
      ]);
      const reportResult = await generateReport(fileName);
      setAnalysis(analysisResult);
      setDashboard(dashboardResult);
      setReportData({
        reportUrl: reportResult?.pdf_url,
        downloadUrl: buildDownloadUrl(fileName),
      });
      recordAnalysisUpdate(fileName);
      setAnalysisUpdates(getAnalysisUpdates());
      clearNewFileTag(fileName);
      setNewFileTag('');
      localStorage.setItem('expelexia-last-analysis', JSON.stringify(analysisResult));
      localStorage.setItem('expelexia-last-dashboard', JSON.stringify(dashboardResult));
      localStorage.setItem('expelexia-last-report', JSON.stringify({ fileName, reportUrl: reportResult?.pdf_url, downloadUrl: buildDownloadUrl(fileName) }));
    } catch (analysisError: unknown) {
      setError(analysisError instanceof Error ? analysisError.message : 'Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analysis Dashboard</h1>
      <p className="section-subtitle">Generate AI-enhanced analysis, charts, and recommendations for lab review.</p>

      <div className="card flex flex-wrap items-end gap-3">
        <label className="text-sm font-medium">
          Choose Uploaded File
          <select
            value={fileName}
            onChange={(event) => setFileName(event.target.value)}
            className="mt-1 block min-w-[260px] rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-primary dark:border-gray-700"
          >
            {!fileHistory.length ? <option value={fileName}>{fileName}</option> : null}
            {fileHistory.map((name) => (
              <option key={name} value={name}>
                {name}
                {newFileTag === name ? ' (NEW DATA)' : ''}
                {fileSources[name] === 'both' ? ' · Both' : fileSources[name] === 'azure' ? ' · Azure' : fileSources[name] === 'local' ? ' · Local' : ' · History'}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          File Name
          <input
            value={fileName}
            onChange={(event) => setFileName(event.target.value)}
            className="mt-1 block rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand-primary dark:border-gray-700"
          />
        </label>
        <button onClick={runAnalysis} disabled={loading} className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
          {loading ? 'Analyzing...' : 'Run Analysis'}
        </button>
      </div>

      <Notifications message={error || (loading ? 'Processing analysis...' : '')} type={error ? 'error' : 'info'} />

      <div className="grid gap-4 sm:grid-cols-3">
        {statsCards.map((card) => (
          <AnalysisCard key={card.title} title={card.title} value={String(card.value)} />
        ))}
      </div>

      {dashboard?.text_explanation ? (
        <div className="card">
          <h3 className="section-title">AI Explanation</h3>
          <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">{dashboard.text_explanation}</p>
        </div>
      ) : null}

      {dashboard?.recommendations ? (
        <div className="card">
          <h3 className="section-title">Recommendations</h3>
          <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">{dashboard.recommendations}</p>
        </div>
      ) : null}

      {dashboard?.data_change_explanation ? (
        <div className="card">
          <h3 className="section-title">Data Change Explanation</h3>
          <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">{dashboard.data_change_explanation}</p>
        </div>
      ) : null}

      {dashboard?.chart_explanation ? (
        <div className="card">
          <h3 className="section-title">Chart Interpretation</h3>
          <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">{dashboard.chart_explanation}</p>
        </div>
      ) : null}

      {dashboard?.technical_review ? (
        <div className="card">
          <h3 className="section-title">Technical Review (Advanced)</h3>
          <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">{dashboard.technical_review}</p>
        </div>
      ) : null}

      {dashboard?.technical_recommendations ? (
        <div className="card">
          <h3 className="section-title">Technical Recommendations (Advanced)</h3>
          <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">{dashboard.technical_recommendations}</p>
        </div>
      ) : null}

      {dashboard?.document_notes ? (
        <div className="card">
          <h3 className="section-title">Document Notes</h3>
          <p className="whitespace-pre-line text-sm text-gray-700 dark:text-gray-200">{dashboard.document_notes}</p>
          {dashboard?.microsoft_link ? (
            <a href={dashboard.microsoft_link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-brand-primary hover:underline">
              Microsoft Hackathon Link
            </a>
          ) : null}
        </div>
      ) : null}

      {reportData ? (
        <div className="card">
          <h3 className="section-title">PDF Report</h3>
          <p className="section-subtitle">Download report directly after analysis, or open the Azure link.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a href={reportData.downloadUrl} className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white">Download PDF</a>
            <a href={reportData.reportUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">Open Azure URL</a>
          </div>
        </div>
      ) : null}

      {analysisUpdates.length ? (
        <div className="card">
          <h3 className="section-title">Document Analysis Updates</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-200">
            {analysisUpdates.slice(0, 8).map((entry) => (
              <li key={`${entry.fileName}-${entry.lastAnalyzedAt}`} className="rounded-lg border border-gray-200 px-3 py-2 dark:border-gray-800">
                {entry.fileName} · Updated {new Date(entry.lastAnalyzedAt).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <SummaryTable rows={dashboard?.table_preview || []} />
      <Charts summary={analysis?.summary_json} chartsData={dashboard?.charts_data || {}} />
    </div>
  );
}
