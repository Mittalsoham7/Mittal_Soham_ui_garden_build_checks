import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  color: ${(props) => (props.disabled ? '#666' : 'black')};
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'transparent'};
  padding: 5px;
  border-radius: 2px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  disabled = false,
  backgroundColor,
  text,
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {text || children}
    </StyledLabel>
  );
};

export default Label;
