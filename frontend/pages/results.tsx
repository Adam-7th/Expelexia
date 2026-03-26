import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ResultsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/analysis');
  }, [router]);

  return null;
}
