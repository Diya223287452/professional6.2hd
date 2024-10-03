import { render, screen } from '@testing-library/react';
import App from './App'; // Ensure this import matches the default export of App.js.

test('renders the quiz question', () => {
  render(<App />);
  const questionElement = screen.getByText(/What is the capital of France?/i);
  expect(questionElement).toBeInTheDocument();
});

test('renders answer buttons', () => {
  render(<App />);
  const parisButton = screen.getByText(/Paris/i);
  const londonButton = screen.getByText(/London/i);
  expect(parisButton).toBeInTheDocument();
  expect(londonButton).toBeInTheDocument();
});

