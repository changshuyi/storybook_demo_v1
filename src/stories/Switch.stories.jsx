import React, { useState } from 'react';
import styled from 'styled-components';

import Switch from '../components/switch/Switch';

const SwitchGroup = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 20px;
  }
`;

export default {
  title: 'INPUTS | 輸入元件/Switch',
  component: Switch,
  argTypes: {
    themeColor: { control: 'color' },
  },
};

const Template = (args) => <Switch {...args} />;
export const Default = Template.bind({});
Default.args = {
  isChecked: true,
};

// export const Default = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     <Switch
//       isChecked={isChecked}
//       onChange={() => setIsChecked((prev) => !prev)}
//     />
//   );
// };

export const CustomColor = Template.bind({});
CustomColor.args = {
  isChecked: true,
  themeColor: '#ffc107',
};

// export const CustomColor = () => {
//   const [isChecked, setIsChecked] = useState(true);
//   return (
//     <Switch
//       isChecked={isChecked}
//       onChange={() => setIsChecked((prev) => !prev)}
//       themeColor="#ffc107"
//     />
//   );
// };

export const DisabledSwitch = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Switch
        isChecked={false}
        isDisabled
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <Switch
        isChecked
        isDisabled
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
};

export const SwitchWithSize = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SwitchGroup>
      <Switch
        size="small"
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <Switch
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </SwitchGroup>
  );
};

export const SwitchWithChildrenLabel = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SwitchGroup>
      <Switch
        checkedChildren="開啟"
        unCheckedChildren="關閉"
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <Switch
        checkedChildren="開啟一個長度彈性的 Switch"
        unCheckedChildren="關閉一個長度彈性的 Switch"
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </SwitchGroup>
  );
};
