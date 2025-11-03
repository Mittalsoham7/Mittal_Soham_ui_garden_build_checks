import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableCell>;

const Template: StoryFn<TableCellProps> = (args) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args}>Cell Data</TableCell>
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
