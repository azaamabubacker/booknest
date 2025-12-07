import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchBook, fetchBooks } from '../lib/api/books';

export default function AppLayout() {
  useEffect(() => {
    fetchBook(1);
  }, []);
  return (
    <header>
      <nav className="flex justify-between">
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-lg font-semibold text-foreground ">
            BookNest
          </Link>
          <Link to="/books">Books</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
}
