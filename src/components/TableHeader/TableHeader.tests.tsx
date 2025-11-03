import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  test('renders the table header component', () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Test Header</th>
          </tr>
        </TableHeader>
      </table>
    );
    const headerElement = screen.getByRole('rowgroup');
    expect(headerElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <TableHeader disabled>
          <tr>
            <th>Test Header</th>
          </tr>
        </TableHeader>
      </table>
    );
    const headerElement = screen.getByRole('rowgroup');
    expect(headerElement).toHaveStyle('background-color: #e0e0e0');
  });
});
