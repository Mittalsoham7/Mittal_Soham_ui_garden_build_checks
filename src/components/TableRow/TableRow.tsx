import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableRow disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
