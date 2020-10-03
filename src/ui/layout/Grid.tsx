import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  FlexboxProps,
  space,
  layout,
  flex,
  grid,
  color,
  border,
  position,
  BorderProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  GridProps,
  PositionProps,
} from 'styled-system';

type View = PositionProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  GridProps &
  ColorProps &
  FlexboxProps &
  Readonly<{ children?: ReactNode }>;

export const Grid = styled.div<View>`
  /* box-sizing: border-box; */
  min-width: 0;
  ${position}
  ${space}
  ${flex}
  ${grid}
  ${border}
  ${layout}
  ${color}
`;
