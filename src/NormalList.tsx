import * as React from 'react';
import * as R from 'remeda';
import styled from 'styled-components';
import { ListItem } from './ListItem';

interface NormalListProps {
  className?: string;
  count: number;
  height: number;
}

const _NormalList = (props: NormalListProps) => {
  const { className, count, height } = props;
  return (
    <div className={className} style={{ height }}>
      {R.range(1, count + 1).map((i) => (
        <ListItem key={i}>item {i}</ListItem>
      ))}
    </div>
  );
};

export const NormalList = styled(_NormalList)`
  display: block;
  overflow: auto;
  border: 1px solid #ccc;
`;
