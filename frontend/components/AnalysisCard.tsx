import { motion } from 'framer-motion';

type AnalysisCardProps = {
  title: string;
  value: string;
};

export default function AnalysisCard({ title, value }: AnalysisCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300">{title}</h3>
      <p className="mt-2 text-lg font-semibold">{value}</p>
    </motion.div>
  );
}
