import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('renders the dropdown component', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} disabled />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveStyle('background-color: #ccc');
  });
});
