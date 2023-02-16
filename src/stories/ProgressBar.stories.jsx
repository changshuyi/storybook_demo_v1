import ProgressBar from '../components/progressbar/ProgressBar';

export default {
  title: 'Feebback | 反饋元件/ProgressBar',
  component: ProgressBar,
  argTypes: {
    done: { options: 0, control: { type: 'number' } },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const progressBar = Template.bind({});

progressBar.args = {
  done: 0,
};
