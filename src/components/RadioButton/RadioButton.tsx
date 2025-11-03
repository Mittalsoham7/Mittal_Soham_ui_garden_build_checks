import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const StyledInput = styled.input<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  margin-right: 8px;
  accent-color: ${(props) =>
    props.disabled ? '#ccc' : props.backgroundColor || '#007bff'};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange && onChange(value)}
        disabled={disabled}
        backgroundColor={backgroundColor}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
