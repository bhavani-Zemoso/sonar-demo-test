import { render, screen } from '@testing-library/react';
import ButtonComponent from '.';

test('renders button', () => {
  render(<ButtonComponent />)
  const buttonElement = screen.getByText('Text')
  expect(buttonElement).not.toBeNull()
})