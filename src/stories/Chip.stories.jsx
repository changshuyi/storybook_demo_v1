import React, { useState } from 'react';
import styled from 'styled-components';

import Chip from '../components/chip/Chip';
import { Done, Face } from '@mui/icons-material';

export default {
  title: 'DATA DISPLAY | 展示元件/Chip',
  component: Chip,
};

const VariantGroup = styled.div`
  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;

const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChipsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin: 12px;
  }
`;

const Template = (args) => <Chip {...args} />;
const TemplateVariant = (args) => (
  <VariantGroup>
    <Chip {...args} label="Contained style" />
    <Chip {...args} label="Outlined style" variant="outlined" />
  </VariantGroup>
);

// eslint-disable-next-line react/prop-types
const TemplateCustomColor = ({ defaultColor, ...args }) => {
  const [pickedColor, setPickedColor] = useState(defaultColor || '#FE6B8B');

  return (
    <SpaceBetween>
      <VariantGroup>
        <Chip {...args} themeColor={pickedColor} label="Contained style" />
        <Chip
          {...args}
          themeColor={pickedColor}
          label="Outlined style"
          variant="outlined"
        />
      </VariantGroup>
      <input
        type="color"
        value={pickedColor}
        onChange={(event) => setPickedColor(event.target.value)}
      />
    </SpaceBetween>
  );
};

const TemplateWithDeleteIcon = () => {
  const args = {
    onDelete: null,
    defaultColor: '#1976d2',
  };
  return (
    <ChipsWrapper>
      <Chip {...args} label="with onDelete" onDelete={() => null} />
      <Chip
        {...args}
        label="icon with onDelete"
        onDelete={() => null}
        icon={<Face />}
      />
      <Chip {...args} label="custom deleteIcon" deleteIcon={<Done />} />
      <Chip
        {...args}
        label="icon with deleteIcon"
        deleteIcon={<Done />}
        icon={<Face />}
      />
      <Chip
        {...args}
        label="with onDelete outlined"
        onDelete={() => null}
        variant="outlined"
      />
      <Chip
        {...args}
        label="icon with onDelete outlined"
        onDelete={() => null}
        icon={<Face />}
        variant="outlined"
      />
      <Chip
        {...args}
        label="custom deleteIcon outlined"
        deleteIcon={<Done />}
        variant="outlined"
      />
      <Chip
        {...args}
        label="icon with deleteIcon outlined"
        deleteIcon={<Done />}
        icon={<Face />}
        variant="outlined"
      />
    </ChipsWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Chip',
  onDelete: null,
};

export const Variant = TemplateVariant.bind({});
Variant.args = {
  onDelete: null,
};

export const CustomColor = TemplateCustomColor.bind({});
CustomColor.args = {
  onDelete: null,
};

export const WithIcon = TemplateWithDeleteIcon.bind({});
