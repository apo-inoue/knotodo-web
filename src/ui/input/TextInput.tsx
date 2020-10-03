import { ComponentPropsWithoutRef } from 'react'
import { HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import { border, layout, BorderProps, LayoutProps } from 'styled-system';

export type TextInputTypes = BorderProps & LayoutProps;

export interface CustomProps extends ComponentPropsWithoutRef<'input'>{
  variant?: 'outlined' | 'underlined';
}

export type TextInputProps =  CustomProps & TextInputTypes;

export const TextInput = styled.input<TextInputProps>`
  border-color: ${props => props.theme.colors.main};
  border-radius: 4px;
  height: 40px;
  padding-left: 4px;
  width: 100%;

  ${props =>
    props.variant &&
    props.variant === 'outlined' &&
    css`
      border: 1px solid;
    `}

  ${props =>
    props.variant &&
    props.variant === 'underlined' &&
    css`
      border-bottom: 1px solid;
    `}

  ${border}
  ${layout}
`;
