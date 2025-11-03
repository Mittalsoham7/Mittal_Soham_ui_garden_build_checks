import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
  test('renders the hero image component', () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/1200x400"
        alt="Hero"
        title="Test"
      />
    );
    const imgElement = screen.getByAltText(/Hero/i);
    expect(imgElement).toBeInTheDocument();
  });

  test('changes opacity when disabled', () => {
    render(
      <HeroImage
        src="https://via.placeholder.com/1200x400"
        alt="Disabled Hero"
        disabled
      />
    );
    const containerElement =
      screen.getByAltText(/Disabled Hero/i).parentElement;
    expect(containerElement).toHaveStyle('opacity: 0.5');
  });
});
