import React from 'react';

import TagsInput from '../components/tagsInput/TagsInput';
import { Close } from '@mui/icons-material';

export default {
  title: 'INPUTS | 輸入元件/TagsInput',
  component: TagsInput,
  argTypes: {
    placeholder: '請輸入資料',
  },
};

const Template = (args) => <TagsInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: ['tag example'],
  closeIcon: <Close fontSize="inherit" />,
};

export const Outlined = Template.bind({});
Outlined.args = {
  value: ['tag example'],
  variant: 'outlined',
  closeIcon: <Close fontSize="inherit" />,
};

export const Text = Template.bind({});
Text.args = {
  value: ['tag example'],
  variant: 'text',
  closeIcon: <Close fontSize="inherit" />,
};
