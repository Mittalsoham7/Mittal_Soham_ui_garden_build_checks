import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ disabled?: boolean; backgroundColor?: string }>`
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

const Text: React.FC<TextProps> = ({
  children,
  disabled = false,
  backgroundColor,
  text,
}) => {
  return (
    <StyledText disabled={disabled} backgroundColor={backgroundColor}>
      {text || children}
    </StyledText>
  );
};

export default Text;
