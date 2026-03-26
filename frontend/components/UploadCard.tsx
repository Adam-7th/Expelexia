import { motion } from 'framer-motion';

type UploadCardProps = {
  fileName: string;
  status: string;
  url?: string;
};

export default function UploadCard({ fileName, status, url }: UploadCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <h3 className="text-base font-semibold">{fileName}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Status: {status}</p>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-brand-primary hover:underline">
          Open Azure Blob
        </a>
      ) : null}
    </motion.div>
  );
}
