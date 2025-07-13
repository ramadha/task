import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../app';

describe('App navigation', () => {
  it('renders CardForm by default', () => {
    render(<App />);
    expect(screen.getByText(/Register Card Form/i)).toBeInTheDocument();
  });

  it('navigates to Menu on burger click', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText(/Open menu/i));
    expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument();
  });

  it('navigates back to CardForm on back click', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText(/Open menu/i));
    fireEvent.click(screen.getByLabelText(/Go back/i));
    expect(screen.getByText(/Register Card Form/i)).toBeInTheDocument();
  });
});
