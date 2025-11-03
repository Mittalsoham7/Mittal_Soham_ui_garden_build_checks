import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  test('renders the label with text', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText(/Disabled Label/i);
    expect(labelElement).toHaveStyle('background-color: #f0f0f0');
  });
});
