import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  BorderProps,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

type View = {
  textAlign?: 'center' | 'left';
} & PositionProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ColorProps &
  Readonly<{ children?: ReactNode }>;

export const Box = styled.div<View>`
  /* box-sizing: border-box; */
  display: flex;
  flex: 1 1;
  flex-direction: row;
  min-width: 0;

  ${position}
  ${space}
  ${flexbox}
  ${border}
  ${layout}
  ${color}

  ${props =>
    props.textAlign === 'center' && {
      textAlign: 'center',
    }}
`;
