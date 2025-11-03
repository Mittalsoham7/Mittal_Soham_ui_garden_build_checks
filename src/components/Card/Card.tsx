import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? '0 2px 4px rgba(0, 0, 0, 0.1)'
        : '0 4px 8px rgba(0, 0, 0, 0.15)'};
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`;

const CardContent = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`;

const Card: React.FC<CardProps> = ({
  children,
  disabled = false,
  backgroundColor,
  title,
  content,
}) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor}>
      {title && <CardTitle>{title}</CardTitle>}
      {content && <CardContent>{content}</CardContent>}
      {children}
    </StyledCard>
  );
};

export default Card;
