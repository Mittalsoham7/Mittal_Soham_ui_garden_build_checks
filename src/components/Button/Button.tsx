import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.disabled ? '#ccc' : props.backgroundColor || '#007bff'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  backgroundColor,
  text,
}) => {
  return (
    <StyledButton
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {text || children}
    </StyledButton>
  );
};

export default Button;
