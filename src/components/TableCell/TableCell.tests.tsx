import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell', () => {
  test('renders the table cell component', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Data</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cellElement = screen.getByText(/Test Data/i);
    expect(cellElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Test Data</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cellElement = screen.getByText(/Test Data/i);
    expect(cellElement).toHaveStyle('background-color: #f0f0f0');
  });
});
