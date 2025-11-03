import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('TableRow', () => {
  test('renders the table row component', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test Data</td>
          </TableRow>
        </tbody>
      </table>
    );
    const rowElement = screen.getByRole('row');
    expect(rowElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Test Data</td>
          </TableRow>
        </tbody>
      </table>
    );
    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveStyle('background-color: #f0f0f0');
  });
});
