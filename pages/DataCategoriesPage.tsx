// components/DataCategoriesPage.tsx
import React from 'react';

const DataCategoriesPage: React.FC = () => {
  return (
    <div className="app-content">
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

export default DataCategoriesPage;
