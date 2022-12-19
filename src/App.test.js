import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct inital color', () => {
  render(<App />);

  // find an element with a role of button and text 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct inital text', () => {});

test('button turns blue when clicked', () => {});
