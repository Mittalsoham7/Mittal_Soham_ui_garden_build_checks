import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableHeader>;

const Template: StoryFn<TableHeaderProps> = (args) => (
  <table>
    <TableHeader {...args}>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </TableHeader>
  </table>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
