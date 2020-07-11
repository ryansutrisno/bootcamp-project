import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('selamat datang', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/selamat datang/i);
  expect(linkElement).toBeInTheDocument();
});
