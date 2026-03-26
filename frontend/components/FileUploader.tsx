import { useRef, type ChangeEvent, type DragEvent } from 'react';
import { motion } from 'framer-motion';

type FileUploaderProps = {
  onFileSelect: (file: File) => void;
  uploading: boolean;
  progress: number;
};

export default function FileUploader({ onFileSelect, uploading, progress }: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onDrop={handleDrop}
      onDragOver={(event: DragEvent<HTMLDivElement>) => event.preventDefault()}
      className="card border-dashed"
    >
      <h2 className="section-title">Upload Lab Data</h2>
      <p className="section-subtitle">Drag and drop or browse files: CSV, TXT, PDF, DOCX, XLSX, PNG, JPG</p>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-4 rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Choose File'}
      </button>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
          name="file"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (file) onFileSelect(file);
        }}
      />

      <div className="mt-4 h-2 w-full overflow-hidden rounded bg-gray-200 dark:bg-gray-800">
        <div className="h-2 bg-brand-primary transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 text-xs text-gray-500">Upload progress: {progress}%</p>
    </motion.div>
  );
}
