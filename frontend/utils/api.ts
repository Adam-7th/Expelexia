// Use Render backend only
const API_BASE = 'http://localhost:8000/api';
let activeApiBase = API_BASE;

const FILE_HISTORY_KEY = 'expelexia-file-history';
const LAST_FILE_KEY = 'expelexia-last-file';
const NEW_FILE_KEY = 'expelexia-new-file';
const ANALYSIS_HISTORY_KEY = 'expelexia-analysis-history';

type UploadResponse = {
  filename: string;
  azure_blob_url: string;
};

type AnalyzeResponse = {
  summary_json?: {
    metadata?: {
      rows?: number;
      columns?: number;
    };
    stats?: Record<string, { mean?: number }>;
  };
};

type DashboardResponse = {
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

type ReportResponse = {
  pdf_url: string;
};

type FileListResponse = {
  files?: Array<{
    name: string;
    in_local?: boolean;
    in_azure?: boolean;
    source?: 'local' | 'azure' | 'both';
  }>;
};

export type AvailableFile = {
  name: string;
  in_local: boolean;
  in_azure: boolean;
  source: 'local' | 'azure' | 'both';
};

type AnalysisUpdate = {
  fileName: string;
  lastAnalyzedAt: string;
};

async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') || '';
  const body: unknown = contentType.includes('application/json') ? await response.json() : await response.text();

  if (!response.ok) {
    const detail = typeof body === 'object' && body !== null && 'detail' in body ? (body as { detail?: string }).detail : body;
    throw new Error((typeof detail === 'string' && detail) || `Request failed with status ${response.status}`);
  }

  return body as T;
}

// All requests go directly to the Render backend
async function requestWithFallback<T>(path: string, init?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE}${path}`, init);
    return await parseResponse<T>(response);
  } catch (error: any) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to fetch backend API at Render. Details: ${message}`);
  }
}

export function getFileHistory(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FILE_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
  } catch {
    return [];
  }
}

export function addFileToHistory(fileName: string): void {
  if (typeof window === 'undefined' || !fileName) return;
  const current = getFileHistory().filter((name) => name !== fileName);
  const updated = [fileName, ...current].slice(0, 20);
  localStorage.setItem(FILE_HISTORY_KEY, JSON.stringify(updated));
  localStorage.setItem(LAST_FILE_KEY, fileName);
  localStorage.setItem(NEW_FILE_KEY, fileName);
}

export function getNewFileTag(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(NEW_FILE_KEY) || '';
}

export function clearNewFileTag(fileName?: string): void {
  if (typeof window === 'undefined') return;
  const current = localStorage.getItem(NEW_FILE_KEY) || '';
  if (!fileName || current === fileName) {
    localStorage.removeItem(NEW_FILE_KEY);
  }
}

export function getAnalysisUpdates(): AnalysisUpdate[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ANALYSIS_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is AnalysisUpdate =>
        typeof item?.fileName === 'string' && typeof item?.lastAnalyzedAt === 'string'
    );
  } catch {
    return [];
  }
}

export function recordAnalysisUpdate(fileName: string): void {
  if (typeof window === 'undefined' || !fileName) return;
  const now = new Date().toISOString();
  const current = getAnalysisUpdates().filter((item) => item.fileName !== fileName);
  const updated = [{ fileName, lastAnalyzedAt: now }, ...current].slice(0, 30);
  localStorage.setItem(ANALYSIS_HISTORY_KEY, JSON.stringify(updated));
}

export async function fetchAvailableFiles(): Promise<string[]> {
  const response = await requestWithFallback<FileListResponse>('/files');
  const names = response.files?.map((item) => item.name).filter((name): name is string => typeof name === 'string' && name.length > 0) || [];
  return Array.from(new Set(names));
}

export async function fetchAvailableFilesDetailed(): Promise<AvailableFile[]> {
  const response = await requestWithFallback<FileListResponse>('/files');
  const detailed = response.files || [];

  return detailed
    .filter((item) => typeof item.name === 'string' && item.name.trim().length > 0)
    .map((item) => {
      const inLocal = !!item.in_local;
      const inAzure = !!item.in_azure;
      const derivedSource: 'local' | 'azure' | 'both' = inLocal && inAzure ? 'both' : inLocal ? 'local' : 'azure';

      return {
        name: item.name,
        in_local: inLocal,
        in_azure: inAzure,
        source: item.source || derivedSource,
      };
    });
}

export async function uploadFile(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append('file', file);

  return requestWithFallback<UploadResponse>('/upload', {
    method: 'POST',
    body: formData,
  });
}

export async function analyzeFile(fileName: string): Promise<AnalyzeResponse> {
  return requestWithFallback<AnalyzeResponse>(`/analyze?file_name=${encodeURIComponent(fileName)}`, {
    method: 'POST',
  });
}

export async function fetchDashboard(fileName: string): Promise<DashboardResponse> {
  return requestWithFallback<DashboardResponse>(`/dashboard/${encodeURIComponent(fileName)}`);
}

export async function generateReport(fileName: string): Promise<ReportResponse> {
  return requestWithFallback<ReportResponse>(`/report?file_name=${encodeURIComponent(fileName)}`);
}

export function buildDownloadUrl(fileName: string): string {
  return `${API_BASE}/report/download?file_name=${encodeURIComponent(fileName)}`;
}

export function buildPreviewUrl(fileName: string): string {
  return `${API_BASE}/report/download?file_name=${encodeURIComponent(fileName)}&inline=true`;
}
