import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google';
import Dashboard from './Components/main/Dashboard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const myPath = '/Components/main/Dashboard';
    const myUrl = `${window.location.protocol}//${window.location.host}${myPath}`;
    router.push(myUrl);
  }, []);

  return (
    <div>
      <p>Redirecting to Dashboard...</p>
      <Dashboard />
    </div>
  );
}
