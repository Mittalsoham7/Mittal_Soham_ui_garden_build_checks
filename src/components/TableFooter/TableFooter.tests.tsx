import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

describe('TableFooter', () => {
  test('renders the table footer component', () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Footer Data</td>
          </tr>
        </TableFooter>
      </table>
    );
    const footerElement = screen.getByText(/Footer Data/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <TableFooter disabled>
          <tr>
            <td>Footer Data</td>
          </tr>
        </TableFooter>
      </table>
    );
    const footerElement = screen.getByText(/Footer Data/i);
    expect(footerElement).toHaveStyle('background-color: #f0f0f0');
  });
});
