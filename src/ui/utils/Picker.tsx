import styled from 'styled-components';
import {
  space,
  border,
  layout,
  flexbox,
  SpaceProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

export type CustomPickerProps = LayoutProps &
  FlexboxProps &
  SpaceProps &
  BorderProps &
  FlexboxProps;

export const Picker = styled.div<CustomPickerProps>`
  width: 100%;
  ${layout}
  ${flexbox}
  ${space}
  ${border}
`;
