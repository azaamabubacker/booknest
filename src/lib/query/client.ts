import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
});
export const api = setupCache(axiosInstance);

export const queryClientBook = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

await queryClientBook.prefetchQuery({ queryKey: ['posts'] });
