import { CloudDownload } from '@mui/icons-material';
import Button from '../components/button/Button';

export default {
  title: 'INPUTS | 輸入元件/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const Outlined = Template.bind({});
Outlined.args = { children: 'Button', variant: 'outlined' };

export const Text = Template.bind({});
Text.args = {
  children: 'Button',
  variant: 'text',
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  children: 'Button',
  isLoading: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'Button',
  isDisabled: true,
};

export const StartIconButton = Template.bind({});
StartIconButton.args = {
  children: 'Button',
  startIcon: <CloudDownload />,
};

export const OutlinedStartIconButton = Template.bind({});
OutlinedStartIconButton.args = {
  children: 'Button',
  variant: 'outlined',
  startIcon: <CloudDownload />,
};

export const EndIconButton = Template.bind({});
EndIconButton.args = {
  children: 'Button',
  endIcon: <CloudDownload />,
};

export const CustomizeButton = Template.bind({});

CustomizeButton.args = {
  children: 'Button',
  endIcon: <CloudDownload />,
  style: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 50,
  },
};
