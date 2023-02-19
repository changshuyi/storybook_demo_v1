import React from 'react';
import styled from 'styled-components';

const CenterContent = styled.div`
  display: flex;
  font-family: 'Noto Sans TC', sans-serif;
  justify-content: center;
  align-items: center;
`;

const Center = ({ children }) => {
  return <CenterContent>{children}</CenterContent>;
};

export default Center;
