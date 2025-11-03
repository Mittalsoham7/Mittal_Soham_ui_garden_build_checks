import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img', () => {
  test('renders the image component', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toBeInTheDocument();
  });

  test('changes opacity when disabled', () => {
    render(
      <Img
        src="https://via.placeholder.com/150"
        alt="Disabled Image"
        disabled
      />
    );
    const imgElement = screen.getByAltText(/Disabled Image/i);
    expect(imgElement).toHaveStyle('opacity: 0.5');
  });
});
