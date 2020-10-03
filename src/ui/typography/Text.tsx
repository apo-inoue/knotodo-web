import styled, { css } from 'styled-components';
import { typography, color, ColorProps, TypographyProps } from 'styled-system';
import { ReactNode } from 'react';

type Text = TypographyProps &
  ColorProps &
  Readonly<{ children?: ReactNode; ellipsis?: boolean }>;

export const Text = styled.p<Text>`
  ${typography}
  ${color}

  ${props =>
    props.ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;
