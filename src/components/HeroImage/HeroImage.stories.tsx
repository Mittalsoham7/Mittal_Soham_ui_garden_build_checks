import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/1200x400',
  alt: 'Hero Image',
  title: 'Welcome',
  subtitle: 'To our component library',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/1200x400',
  alt: 'Disabled Hero Image',
  title: 'Disabled',
  subtitle: 'This is disabled',
  disabled: true,
};
