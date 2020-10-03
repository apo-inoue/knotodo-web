import { flexbox, space, FlexboxProps, SpaceProps } from 'styled-system';
import styled from 'styled-components';
import { ReactNode } from 'react';

type View = SpaceProps & FlexboxProps & Readonly<{ children?: ReactNode }>;

export const Flex = styled.div<View>`
  /* box-sizing: border-box; */
  min-width: 0;
  ${flexbox}
  ${space}
`;
