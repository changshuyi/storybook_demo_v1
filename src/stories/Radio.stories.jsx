import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../components/button/Button';
import Radio from '../components/radio/Radio';
import RadioGroup from '../components/radio/RadioGroup';

export default {
  title: 'INPUTS | 輸入元件/Radio',
  component: Radio,
  argTypes: {
    themeColor: { control: 'color' },
  },
};

const RadioWrapper = styled.div`
  display: flex;
  font-family: 'Noto Sans TC', sans-serif;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Template = (args) => <Radio {...args} />;

const TemplateWithState = (args) => {
  const { isChecked: defaultChecked } = args;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleOnClick = () => {
    setIsChecked(true);
  };

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <RadioWrapper>
      <Radio {...args} isChecked={isChecked} onClick={handleOnClick} />
      <Button variant="outlined" onClick={() => setIsChecked(false)}>
        重設
      </Button>
    </RadioWrapper>
  );
};

const TemplateWithColorPicker = (args) => {
  const { isChecked: defaultChecked } = args;
  const defaultColor = '#FE6B8B';
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [pickedColor, setPickedColor] = useState(defaultColor);

  const handleOnClick = () => {
    setIsChecked(true);
  };

  useEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <RadioWrapper>
      <Radio
        {...args}
        themeColor={pickedColor}
        isChecked={isChecked}
        onClick={handleOnClick}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="color"
          value={pickedColor}
          onChange={(event) => setPickedColor(event.target.value)}
          style={{ marginRight: 8 }}
        />
        <Button
          variant="outlined"
          themeColor={pickedColor}
          onClick={() => {
            setIsChecked(false);
          }}
        >
          重設
        </Button>
      </div>
    </RadioWrapper>
  );
};

const TemplateWithRadioGroup = (args) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOnChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <RadioGroup
      value={selectedValue}
      onChange={handleOnChange}
      columns={2}
      style={{
        maxWidth: 500,
      }}
      {...args}
    >
      <Radio value="male">Male</Radio>
      <Radio value="female">Female</Radio>
      <Radio value="others">Others</Radio>
    </RadioGroup>
  );
};

export const Default = TemplateWithState.bind({});
Default.args = {
  children: 'Radio',
};

export const CustomizeColor = TemplateWithColorPicker.bind({});
CustomizeColor.args = {
  children: 'Radio',
  isChecked: true,
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
  isDisabled: true,
  children: 'Radio',
};

export const WithRadioGroup = TemplateWithRadioGroup.bind({});
