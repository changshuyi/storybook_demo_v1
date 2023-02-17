import React from 'react';

import TagsInput from '../components/tagsInput/TagsInput';
import { Close } from '@mui/icons-material';

export default {
  title: 'INPUTS | 輸入元件/TagsInput',
  component: TagsInput,
};

const Template = (args) => <TagsInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: ['tag example'],
  placeholder: '請輸入資料',
  closeIcon: <Close />,
};
