import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import DashboardPage from './containers/DashboardPage/DashboardPage';
import OnChainQueriesPage from './containers/OnChainQueriesPage/OnChainQueriesPage'; // Import OnChainQueriesPage
import Helpers from './utils/helpers';


import './App.css';



const SearchResultsPage: React.FC = () => {
  // Display search results based on your requirements
  return (
    <div>
      <h2>Search Results</h2>
      {/* Display search results here */}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>{Helpers.capitalizeFirstLetter('Smart Query Blockchain DApp')}</h1>
        </header>
        <nav className="app-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/on-chain-queries">On-Chain Queries</Link>
            </li>
            {/* Add links to new functionalities here */}
            {/* For example: */}
            <li>
              <Link to="/use-cases">Use Cases</Link>
            </li>
            <li>
              <Link to="/data-categories">Data Categories</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/on-chain-queries" element={<OnChainQueriesPage />} />
            {/* Add more routes for new functionalities */}
            {/* For example: */}
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/data-categories" element={<DataCategoriesPage />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Define components for new functionalities
const UseCasesPage: React.FC = () => {
  return (
    <div>
      <h2>Use Cases</h2>
      <p>
        Smart Query Blockchain DApp provides innovative solutions for various industries.
        Explore the following use cases to understand how our platform can make a difference:
      </p>
      <ul>
        <li>Power Applications</li>
        <li>Real-Time Streaming</li>
        <li>Data Analytics</li>
        <li>Download Historical Data</li>
        <li>dApp & Smart Contract Integration</li>
        <li>Build Custom Queries</li>
      </ul>
      {/* Add more detailed content as needed */}
    </div>
  );
};

const DataCategoriesPage: React.FC = () => {
  return (
    <div>
      <h2>Data Categories</h2>
      <p>
        Smart Query Blockchain DApp offers a wide range of data categories to cater to different needs.
        Choose from the following categories to access relevant on-chain data:
      </p>
      <ul>
        <li>Crypto Exchanges</li>
        <li>Public Blockchains</li>
        <li>Decentralized Finance (DeFi)</li>
        <li>GameFi & Metaverses</li>
        <li>Public Medical Research</li>
        <li>Financial Data</li>
        <li>Weather Report</li>
        <li>Scientific Data</li>
        <li>Cancer Research</li>
        <li>Agricultural</li>
        <li>Astrophysics Data</li>
      </ul>
      {/* Add more detailed content as needed */}
    </div>
  );
};


export default App;