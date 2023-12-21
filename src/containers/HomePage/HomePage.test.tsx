// src/components/HomePage/HomePage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to the smart-query-blockchain DApp')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
