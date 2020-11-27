import * as React from 'react';
import styled from 'styled-components';

interface ListItemProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const ListItem = styled.div`
  display: block;
  padding: 15px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;
