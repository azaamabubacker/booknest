import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import HomePage from '../feature/home/HomePage';
import BooksPage from '../feature/books/BooksPage';
import NewBookPage from '../feature/books/NewBookPage';
import BooksDetailsPage from '../feature/books/BooksDetailsPage';
import EditBookPage from '../feature/books/EditBookPage';
import LoginPage from '../feature/auth/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'books', element: <BooksPage /> },
      { path: 'books/new', element: <NewBookPage /> },
      { path: 'books/:id', element: <BooksDetailsPage /> },
      { path: 'books/:id/edit', element: <EditBookPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);
