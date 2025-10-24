import { Link, Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">BookNest</Link>
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
