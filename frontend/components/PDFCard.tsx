import { motion } from 'framer-motion';

type PDFCardProps = {
  fileName: string;
  reportUrl: string;
  downloadUrl: string;
};

export default function PDFCard({ fileName, reportUrl, downloadUrl }: PDFCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card">
      <h3 className="text-base font-semibold">{fileName}</h3>
      <div className="mt-3 flex flex-wrap gap-3">
        <a href={downloadUrl} className="rounded-lg bg-brand-primary px-3 py-2 text-sm font-medium text-white transition hover:opacity-90">
          Download PDF
        </a>
        <a href={reportUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
          Open Azure URL
        </a>
      </div>
    </motion.div>
  );
}
