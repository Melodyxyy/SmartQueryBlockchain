import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import styles from './QueryComponent.module.css';

interface QueryComponentProps {
  contractAddress: string;
  contractABI: any[];
}

const QueryComponent: React.FC<QueryComponentProps> = ({ contractAddress, contractABI }) => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contractInstance, setContractInstance] = useState<any | null>(null);
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
          setWeb3(window.web3);
        } else if (window.web3) {
          setWeb3(new Web3(window.web3.currentProvider));
        } else {
          console.error('No web3 provider detected');
        }
      } catch (error) {
        console.error('Error initializing web3:', error);
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    if (web3) {
      const initContract = async () => {
        const instance = new web3.eth.Contract(contractABI, contractAddress);
        setContractInstance(instance);
        updateBlockNumber(instance);
      };

      initContract();
    }
  }, [web3, contractABI, contractAddress]);

  const executeQuery = async () => {
    if (contractInstance) {
      try {
        setButtonDisabled(true);
        await contractInstance.methods.executeQuery().send({ from: (await web3.eth.getAccounts())[0] });
        updateBlockNumber(contractInstance);
      } catch (error) {
        console.error('Error executing query:', error);
      } finally {
        setButtonDisabled(false);
      }
    }
  };

  const updateBlockNumber = async (contract: any) => {
    try {
      const newBlockNumber = await contract.methods.lastBlockNumber().call();
      setBlockNumber(newBlockNumber);
    } catch (error) {
      console.error('Error updating block number:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Smart Query Blockchain DApp</h1>
      <p>Current Block Number: {blockNumber}</p>
      <button onClick={executeQuery} disabled={buttonDisabled}>
        {buttonDisabled ? 'Executing...' : 'Execute Query'}
      </button>
    </div>
  );
};

export default QueryComponent;
