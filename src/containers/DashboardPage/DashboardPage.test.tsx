import React from 'react';
import styles from './DashboardPage.module.css';

interface DashboardPageProps {
  // Props if needed
}

const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.myClass}>Dashboard Page</h1>
      <p>This is the dashboard page of the smart-query-blockchain DApp.</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default DashboardPage;
