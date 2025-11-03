import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    padding: 4px;
    font-size: 14px;
  }
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableCell disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
