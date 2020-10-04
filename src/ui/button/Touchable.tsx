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

export type TouchableType = LayoutProps &
  FlexboxProps &
  SpaceProps &
  BorderProps &
  FlexboxProps;

export interface TouchableProps
  extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'muted' | 'danger';
  btnSize?: 'md' | 'lg';
  stretch?: boolean;
  center?: boolean;
}

export const Touchable = styled.button<TouchableProps & TouchableType>`
  border-radius: 4px;
  min-width: 0;
  padding: 8px 12px;

  ${props =>
    props.center && {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }}

  ${props => props.stretch && { width: '100%' }}

  ${props =>
    props.color === 'primary' &&
    props.variant === 'contained' && {
      backgroundColor: props.theme.colors.main,
    }}

  ${props =>
    props.color === 'primary' &&
    props.variant === 'outlined' && {
      border: `1px solid ${props.theme.colors.main}`,
      padding: '7px 13px',
    }}

  ${props =>
    props.color === 'muted' &&
    props.variant === 'contained' && {
      backgroundColor: props.theme.colors.muted,
      padding: '7px 13px',
    }}

  ${props =>
    props.color === 'muted' &&
    props.variant === 'outlined' && {
      border: `1px solid ${props.theme.colors.muted}`,
    }}

  ${props =>
    props.btnSize &&
    props.btnSize === 'lg' && {
      padding: '10px 20px',
    }}

  ${layout}
  ${flexbox}
  ${space}
  ${border}
`;
