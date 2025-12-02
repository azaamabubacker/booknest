import { QueryClient } from '@tanstack/react-query';

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
