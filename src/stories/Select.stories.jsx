import React, { useState } from 'react';

import Select from '../components/select/Select';

export default {
  title: 'NAVIGATION | 導航元件/Select',
  component: Select,
};

const options = [
  // {
  //   value: 'all',
  //   label: '',
  // },
  {
    value: 'taipei',
    label: '台北',
  },
  {
    value: 'taoyuan',
    label: '桃園',
  },
  {
    value: 'taichung',
    label: '台中',
  },
  {
    value: 'changhua',
    label: '彰化',
  },
];

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <Select
      {...args}
      value={selectedValue}
      onSelect={(value) => setSelectedValue(value)}
      placeholder="請選擇目的地"
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options,
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  options,
  isLoading: true,
};
