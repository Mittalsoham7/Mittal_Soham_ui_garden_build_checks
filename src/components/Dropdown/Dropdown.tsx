import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.disabled ? '#ccc' : props.backgroundColor || '#fff'};
  color: ${(props) => (props.disabled ? '#666' : '#000')};
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledSelect
      value={selected}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
