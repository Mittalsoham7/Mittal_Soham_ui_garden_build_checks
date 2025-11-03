import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders the button with text', () => {
    render(<Button text="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Button text="Disabled Button" disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toHaveStyle('background-color: #ccc');
  });
});
