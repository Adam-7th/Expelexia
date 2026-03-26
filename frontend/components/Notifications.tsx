import { AnimatePresence, motion } from 'framer-motion';

type NotificationsProps = {
  message?: string;
  type?: 'info' | 'error';
};

export default function Notifications({ message, type = 'info' }: NotificationsProps) {
  const bgClass = type === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-200' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200';

  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={`rounded-lg px-4 py-2 text-sm ${bgClass}`}
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
