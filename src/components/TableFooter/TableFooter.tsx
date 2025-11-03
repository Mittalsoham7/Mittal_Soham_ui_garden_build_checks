import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || '#f9f9f9'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledTableFooter disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;
