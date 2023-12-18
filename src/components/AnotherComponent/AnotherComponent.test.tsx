// src/components/AnotherComponent/AnotherComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnotherComponent from './AnotherComponent';

describe('AnotherComponent', () => {
  it('renders without crashing', () => {
    render(<AnotherComponent />);
    expect(screen.getByText('Another Component')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
