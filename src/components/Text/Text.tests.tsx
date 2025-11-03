import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('renders the text component', () => {
    render(<Text text="Test Text" />);
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Text text="Disabled Text" disabled />);
    const textElement = screen.getByText(/Disabled Text/i);
    expect(textElement).toHaveStyle('background-color: #f0f0f0');
  });
});
