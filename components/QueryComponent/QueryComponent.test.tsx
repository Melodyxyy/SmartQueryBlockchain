import React, { useState } from 'react';

interface QueryComponentProps {
  contractAddress: string;
  contractABI: any[]; // Replace with the actual type of contractABI
}

const QueryComponent: React.FC<QueryComponentProps> = ({ contractAddress, contractABI }) => {
  const [queryResult, setQueryResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeQuery = async () => {
    try {
      setLoading(true);
      // Implement your logic to execute the query using contractAddress and contractABI
      // Dummy implementation for illustration purposes
      const result = await fetch(`https://api.example.com/query?address=${contractAddress}`);
      const data = await result.json();
      setQueryResult(data);
    } catch (err) {
      setError('Failed to execute query. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Query Component</h2>
      <p>Contract Address: {contractAddress}</p>
      <button onClick={executeQuery} disabled={loading}>
        {loading ? 'Executing Query...' : 'Execute Query'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {queryResult && (
        <div>
          <h3>Query Result:</h3>
          <pre>{JSON.stringify(queryResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default QueryComponent;
