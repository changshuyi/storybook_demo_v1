import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';

const StyledSpin = styled.div`
  display: inline-flex;
  svg {
    color: ${(props) => props.theme.color.primary};
  }
`;

const SpinContainer = styled.div`
  display: inline-flex;
  svg {
    color: ${(props) => props.theme.color.primary};
  }
  position: relative;
`;

const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  display: block;
  width: 100%;
  height: 100%;
  max-height: 400px;
  & > * {
    position: absolute;
    top: calc(50% - ${(props) => props.$indicatorSize.height / 2}px);
    left: calc(50% - ${(props) => props.$indicatorSize.width / 2}px);
  }
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.8;
`;

/**
 * `Spin` 是一個載入狀態元件，當頁面正在處理非同步行為，
 * 或需要讓用戶等待的作業時，用來顯示以緩解用戶等待的焦慮。
 */
const Spin = ({ indicator, isLoading, children, ...props }) => {
  const indicatorRef = useRef();
  const [indicatorSize, setIndicatorSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const indicatorElem = indicatorRef.current?.children[0];
    setIndicatorSize({
      width: indicatorElem?.clientWidth,
      height: indicatorElem?.clientHeight,
    });
  }, [indicatorRef, isLoading]);

  if (!children) {
    return <StyledSpin {...props}>{indicator}</StyledSpin>;
  }
  return (
    <SpinContainer {...props}>
      {children}
      {isLoading && (
        <>
          <Mask />
          <Indicator
            ref={indicatorRef}
            className="spin__indicator"
            $indicatorSize={indicatorSize}
          >
            {indicator}
          </Indicator>
        </>
      )}
    </SpinContainer>
  );
};

Spin.propTypes = {
  /**
   * 客製化樣式
   */
  className: PropTypes.string,
  /**
   * 自定義載入符號
   */
  indicator: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * 是否載入中
   */
  isLoading: PropTypes.bool,
  /**
   * 內容
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Spin.defaultProps = {
  className: '',
  indicator: <CircularProgress />,
  isLoading: false,
  children: '',
};

export default Spin;
