import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableRow from './TableRow';
import { TableRowProps } from './TableRow.types';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableRow>;

const Template: StoryFn<TableRowProps> = (args) => (
  <table>
    <tbody>
      <TableRow {...args}>
        <td>Data 1</td>
        <td>Data 2</td>
      </TableRow>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
