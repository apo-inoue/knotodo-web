import styled, {StyledFunction } from 'styled-components';
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

export type TouchableType =  LayoutProps &
FlexboxProps &
SpaceProps &
BorderProps &
FlexboxProps;

export interface TouchableProps extends React.ComponentPropsWithoutRef<'button'>{
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'muted' | 'danger';
}

export const Touchable = styled.button<TouchableProps & TouchableType>`
  align-items: center;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 12px;

  ${layout}
  ${flexbox}
  ${space}
  ${border}
`;
