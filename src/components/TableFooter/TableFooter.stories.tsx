import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableFooter from './TableFooter';
import { TableFooterProps } from './TableFooter.types';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableFooter>;

const Template: StoryFn<TableFooterProps> = (args) => (
  <table>
    <TableFooter {...args}>
      <tr>
        <td>Footer Data</td>
      </tr>
    </TableFooter>
  </table>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
