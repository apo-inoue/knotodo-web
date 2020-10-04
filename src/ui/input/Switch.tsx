import { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

interface TouchableProps extends ComponentPropsWithoutRef<'input'> {
  small?: boolean;
}

export const ToggleSwitch = styled.div<TouchableProps>`
  display: inline;
  position: relative;
  ${props =>
    props.small &&
    css`
      height: 21px;
      width: 37.5px;
    `}
`;

export const Toggle = styled.input<TouchableProps>`
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 5;

  &:checked {
    + label {
      background-color: ${props => props.theme.colors.main};

      &::after {
        left: 40px;
        ${props => props.small && { left: '20px' }}
      }
    }
  }
`;

export const Switch = styled.label`
  background: ${props => props.theme.colors.blacks[5]};
  border-radius: 46px;
  box-sizing: border-box;
  display: inline-block;
  height: 42px;
  position: relative;
  transition: 0.4s;
  width: 75px;

  &::after {
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    content: '';
    height: 42px;
    left: 0;
    position: absolute;
    top: 0;
    transition: 0.4s;
    width: 42px;
    z-index: 2;
  }
`;
