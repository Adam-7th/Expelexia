import { useState } from 'react';
import { useRouter } from 'next/router';
import FileUploader from '../components/FileUploader';
import UploadCard from '../components/UploadCard';
import Notifications from '../components/Notifications';
import { addFileToHistory, uploadFile } from '../utils/api';

type UploadedState = {
  fileName: string;
  status: string;
  url: string;
};

export default function UploadPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState<UploadedState | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError('');
    setMessage('Uploading file...');
    setProgress(20);

    try {
      const result = await uploadFile(file);
      setProgress(100);
      setUploaded({ fileName: result.filename, status: 'Uploaded', url: result.azure_blob_url });
      addFileToHistory(result.filename);
      localStorage.setItem('expelexia-last-upload', JSON.stringify(result));
      setMessage('Upload successful. Redirecting to analysis...');
      setTimeout(() => router.push('/analysis'), 800);
    } catch (uploadError: unknown) {
      setError(uploadError instanceof Error ? uploadError.message : 'Upload failed');
      setProgress(0);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Upload Lab File</h1>
      <p className="section-subtitle">Supports CSV, TXT, PDF, DOCX, XLSX, PNG, JPG with Azure blob integration.</p>
      <Notifications message={error || message} type={error ? 'error' : 'info'} />
      <FileUploader onFileSelect={handleUpload} uploading={uploading} progress={progress} />
      {uploaded ? <UploadCard fileName={uploaded.fileName} status={uploaded.status} url={uploaded.url} /> : null}
    </div>
  );
}
