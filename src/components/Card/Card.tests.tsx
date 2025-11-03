import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('renders the card component', () => {
    render(<Card title="Test Card" content="Test content" />);
    const titleElement = screen.getByText(/Test Card/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('changes opacity when disabled', () => {
    render(<Card title="Disabled Card" content="Disabled content" disabled />);
    const cardElement = screen.getByText(/Disabled Card/i).parentElement;
    expect(cardElement).toHaveStyle('opacity: 0.5');
  });
});
