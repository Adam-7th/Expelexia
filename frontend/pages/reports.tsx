import { useEffect, useState } from 'react';
import PDFCard from '../components/PDFCard';
import Notifications from '../components/Notifications';
import { buildDownloadUrl, buildPreviewUrl, clearNewFileTag, fetchAvailableFilesDetailed, generateReport, getFileHistory, getNewFileTag } from '../utils/api';

type ReportPayload = {
  fileName: string;
  reportUrl: string;
  downloadUrl: string;
  previewUrl: string;
};

export default function ReportsPage() {
  const [fileName, setFileName] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('expelexia-last-file') || 'IOT-temp.csv' : 'IOT-temp.csv'));
  const [fileHistory, setFileHistory] = useState<string[]>([]);
  const [fileSources, setFileSources] = useState<Record<string, 'local' | 'azure' | 'both' | 'history'>>({});
  const [newFileTag, setNewFileTag] = useState('');
  const [report, setReport] = useState<ReportPayload | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const initialize = async () => {
      const history = getFileHistory();
      const lastFile = localStorage.getItem('expelexia-last-file') || '';
      const newTag = getNewFileTag();
      let remoteFiles: Array<{ name: string; source: 'local' | 'azure' | 'both' }> = [];

      try {
        remoteFiles = await fetchAvailableFilesDetailed();
      } catch {
        remoteFiles = [];
      }

      const sourceMap: Record<string, 'local' | 'azure' | 'both' | 'history'> = {};
      remoteFiles.forEach((item) => {
        sourceMap[item.name] = item.source;
      });

      const merged = Array.from(
        new Set([newTag, lastFile, ...history, ...remoteFiles.map((item) => item.name)].filter((item): item is string => !!item && item.trim().length > 0))
      );

      merged.forEach((name) => {
        if (!sourceMap[name]) {
          sourceMap[name] = 'history';
        }
      });

      setFileHistory(merged);
      setFileSources(sourceMap);
      setNewFileTag(newTag);

      if (lastFile) {
        setFileName(lastFile);
      } else if (merged.length) {
        setFileName(merged[0]);
      }
    };

    initialize();
  }, []);

  const runReport = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await generateReport(fileName);
      const payload: ReportPayload = {
        fileName,
        reportUrl: result.pdf_url,
        downloadUrl: buildDownloadUrl(fileName),
        previewUrl: buildPreviewUrl(fileName),
      };
      setReport(payload);
      clearNewFileTag(fileName);
      setNewFileTag('');
      localStorage.setItem('expelexia-last-report', JSON.stringify(payload));
    } catch (reportError: unknown) {
      setError(reportError instanceof Error ? reportError.message : 'Report generation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reports</h1>
      <p className="section-subtitle">Generate professional PDF reports and download instantly.</p>

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
        <button onClick={runReport} disabled={loading} className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white">
          {loading ? 'Generating...' : 'Generate Report'}
        </button>
      </div>

      <Notifications message={error || (loading ? 'Preparing your report...' : '')} type={error ? 'error' : 'info'} />

      {report ? (
        <>
          <PDFCard fileName={report.fileName} reportUrl={report.reportUrl} downloadUrl={report.downloadUrl} />
          <div className="card">
            <h3 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-200">Inline Preview</h3>
            <iframe title="PDF Preview" src={report.previewUrl} className="h-[640px] w-full rounded-lg border border-gray-200 dark:border-gray-800" />
          </div>
        </>
      ) : null}
    </div>
  );
}
