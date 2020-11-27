import * as React from 'react';
import * as R from 'remeda';
import styled from 'styled-components';
import { ListItem } from './ListItem';

interface VirtualListProps {
  className?: string;
  count: number;
  height: number;
}

const _VirtualList = (props: VirtualListProps) => {
  const { className, count, height } = props;
  const [scrollTop, setScrollTop] = React.useState(0);

  const rowHeight = 50;

  const { startRow, endRow } = React.useMemo(() => {
    // 200 -> 4
    // 0 -> 0
    const visibleRow = Math.floor(scrollTop / rowHeight);
    // 100 + 300 -> 8
    const visibleEndRow = Math.floor((scrollTop + height) / rowHeight) - 1;
    const overscanCount = 10;
    return {
      startRow: Math.max(visibleRow - overscanCount, 0),
      endRow: Math.min(visibleEndRow + overscanCount, count - 1),
    };
  }, [scrollTop, height]);

  const body = React.useMemo(() => {
    return R.range(startRow, endRow + 1).map((rowIndex) => (
      <ListItem
        style={{
          position: 'absolute',
          width: '100%',
          top: rowIndex * rowHeight,
        }}
        key={rowIndex}
      >
        item {rowIndex}
      </ListItem>
    ));
  }, [startRow, endRow]);

  return (
    <div
      className={className}
      onScroll={(e) => {
        setScrollTop(e.currentTarget.scrollTop);
      }}
      style={{ height }}
    >
      <div
        style={{
          height: count * height,
        }}
      >
        {body}
      </div>
    </div>
  );
};

export const VirtualList = styled(_VirtualList)`
  display: block;
  position: relative;
  overflow: auto;
  border: 1px solid #ccc;
`;
