// src/components/AnotherComponent/AnotherComponent.tsx
import React from 'react';
import styles from './AnotherComponent.module.css';

interface AnotherComponentProps {
  // Props if needed
}

const AnotherComponent: React.FC<AnotherComponentProps> = () => {
  return (
    <div className={styles.container}>
      <h2>Another Component</h2>
      <p>This is another component in the smart-query-blockchain DApp.</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default AnotherComponent;
