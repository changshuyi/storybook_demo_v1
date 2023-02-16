import Skeleton from '../components/skeleton/Skeleton';

export default {
  title: 'Feebback | 反饋元件/Skeleton',
  component: Skeleton,
  argTypes: {
    label: { options: ['1', '2', '3'], control: { type: 'select' } },
  },
};

const Template = (args) => <Skeleton {...args} />;

export const feedSkeleton = Template.bind({});

feedSkeleton.args = {
  type: 'feed',
};

export const topSkeleton = Template.bind({});

topSkeleton.args = {
  type: 'top',
};

export const menuSkeleton = Template.bind({});

menuSkeleton.args = {
  type: 'menu',
};

export const circleSkeleton = Template.bind({});

circleSkeleton.args = {
  type: 'circle',
};

export const customSkeleton = Template.bind({});

customSkeleton.args = {
  type: 'custom',
};
