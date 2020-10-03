import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flex,
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
  min-width: 0;
  ${position}
  ${space}
  ${flex}
  ${border}
  ${layout}
  ${color}

  ${props =>
    props.textAlign === 'center' && {
      textAlign: 'center',
    }}
`;
