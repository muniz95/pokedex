import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Loading from './components/loading';
import Header from './components/header';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';

const App: React.FC = () => {
  const routing = useRoutes([...routes]);
  return (
    <React.Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="main">{routing}</div>
      </QueryClientProvider>
    </React.Suspense>
  );
};

export default App;
