import React from 'react';
import styled from 'styled-components';
import { NormalList } from './NormalList';
import { VirtualList } from './VirtualList';

interface AppProps {
  className?: string;
}

const _App = (props: AppProps) => {
  const { className } = props;
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className={className}>
      <button onClick={() => setIsVisible(true)}>show</button>
      {/* {isVisible && <NormalList height={300} count={50000} />} */}
      {isVisible && <VirtualList height={300} count={50000} />}
    </div>
  );
};

export const App = styled(_App)`
  height: 600px;
  width: 500px;
  margin: 30px auto;
  button {
    margin-bottom: 10px;
  }
`;
