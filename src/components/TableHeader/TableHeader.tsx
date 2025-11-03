import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.disabled ? '#e0e0e0' : props.backgroundColor || '#f5f5f5'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableHeader disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;
