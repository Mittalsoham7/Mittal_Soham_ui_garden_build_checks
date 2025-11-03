import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  test('renders the table component', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test Data</td>
          </tr>
        </tbody>
      </Table>
    );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Test Data</td>
          </tr>
        </tbody>
      </Table>
    );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('background-color: #f0f0f0');
  });
});
