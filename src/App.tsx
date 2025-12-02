import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './App.css';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { queryClientBook } from './lib/query/client';

export default function App() {
  return (
    <div className="appShell">
      <QueryClientProvider client={queryClientBook}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}
