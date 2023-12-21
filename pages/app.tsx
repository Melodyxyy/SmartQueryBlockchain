// pages/App.tsx
import React from 'react';
import { useRouter } from 'next/router';

// Import individual pages or components
import HomePage from '../containers/HomePage/HomePage';
import DashboardPage from '../containers/DashboardPage/DashboardPage';
import OnChainQueriesPage from '../containers/OnChainQueriesPage/OnChainQueriesPage'; // Import OnChainQueriesPage

// Import new pages or components
import UseCasesPage from './UseCasesPage';
import DataCategoriesPage from './DataCategoriesPage';
import SearchResultsPage from './SearchResultsPage';
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

// Main App component
const App: React.FC = () => {
  const router = useRouter();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Smart Query Blockchain DApp</h1>
      </header>
      <nav className="app-menu">
        <ul>
          {/* Navigation links */}
          <li>
            <a onClick={() => router.push('/')}>Home</a>
          </li>
          <li>
            <a onClick={() => router.push('/DashboardPage')}>Dashboard</a>
          </li>
          <li>
            <a onClick={() => router.push('/OnChainQueriesPage')}>On-Chain Queries</a>
          </li>
          {/* Add links to new functionalities here */}
          {/* For example: */}
          <li>
            <a onClick={() => router.push('/use-cases')}>Use Cases</a>
          </li>
          <li>
            <a onClick={() => router.push('/data-categories')}>Data Categories</a>
          </li>
          <li>
            <a onClick={() => router.push('/RegisterForm')}>Login</a>
          </li>
        </ul>
      </nav>
      <main>
        {/* Render content based on the current route */}
        {router.pathname === '/' && <HomePage />}
        {router.pathname === '/DashboardPage' && <DashboardPage />}
        {router.pathname === '/OnChainQueriesPage' && <OnChainQueriesPage />}
        {/* Add more routes for new functionalities */}
        {/* For example: */}
        {router.pathname === '/use-cases' && <UseCasesPage />}
        {router.pathname === '/data-categories' && <DataCategoriesPage />}
        {router.pathname === '/search-results' && <SearchResultsPage />}
        {router.pathname === '/LoginForm' && <LoginForm />}
      </main>
    </div>
  );
};

export default App;
