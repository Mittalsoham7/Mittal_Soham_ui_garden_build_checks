import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'white'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTable>
  );
};

export default Table;
