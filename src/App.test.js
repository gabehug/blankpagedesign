import { render, screen } from '@testing-library/react';
import App from './App';

test('name present', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gabe Hug/i);
  expect(linkElement).toBeInTheDocument();
});
