import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import FormControl from '../components/formControl/FormControl';
import { FaSpinner } from '../components/icons/FaSpinner';
import Spin from '../components/spin/Spin';
import Switch from '../components/switch/Switch';

export default {
  title: 'Feebback | 反饋元件/Spin',
  component: Spin,
};

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotateContainer = styled.div`
  width: 40px;
  height: 40px;
  animation: ${rotateAnimation} 1000ms ease-in-out infinite;
`;

const MockContent = styled.div`
  max-width: 500px;
  padding: 20px;
  max-height: 500px;
  overflow-y: auto;
  border: 1px solid #b9b9b9;
`;

const Template = (args) => <Spin {...args} />;

const TemplateSpinContainer = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  const [useCustomIndicator, setUseCustomIndicator] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Spin
        isLoading={isChecked}
        indicator={
          useCustomIndicator ? (
            <RotateContainer>
              <FaSpinner />
            </RotateContainer>
          ) : undefined
        }
      >
        <MockContent>
          <h1>Lorem Ipsum</h1>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for lorem ipsum will uncover
            many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for lorem ipsum will uncover
            many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for lorem ipsum will uncover
            many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
        </MockContent>
      </Spin>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormControl placement="left" label="是否正在載入中">
          <Switch
            isChecked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
        </FormControl>
        <FormControl
          placement="left"
          label="自定義載入符號"
          style={{ marginTop: 20 }}
        >
          <Switch
            isChecked={useCustomIndicator}
            onChange={() => setUseCustomIndicator((prev) => !prev)}
          />
        </FormControl>
      </div>
    </div>
  );
};

export const Default = Template.bind({});

export const CustomIndicator = Template.bind({});
CustomIndicator.args = {
  indicator: (
    <RotateContainer>
      <FaSpinner />
    </RotateContainer>
  ),
};

export const SpinAsContainer = TemplateSpinContainer.bind({});
