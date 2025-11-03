import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'radio',
  value: 'option1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Option',
  name: 'radio',
  value: 'disabled',
  disabled: true,
};
