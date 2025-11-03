import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('renders the radio button component', () => {
    render(<RadioButton label="Test Radio" name="test" value="test" />);
    const radioElement = screen.getByLabelText(/Test Radio/i);
    expect(radioElement).toBeInTheDocument();
  });

  test('changes opacity when disabled', () => {
    render(
      <RadioButton
        label="Disabled Radio"
        name="test"
        value="disabled"
        disabled
      />
    );
    const labelElement = screen.getByText(/Disabled Radio/i);
    expect(labelElement).toHaveStyle('opacity: 0.5');
  });
});
