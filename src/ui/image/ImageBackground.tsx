import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { ReactNode } from 'react';

type ImageBackground = ColorProps &
  Readonly<{ children?: ReactNode }> &
  Readonly<HTMLImageElement>;

export const ImageBackground = styled.img`
  background-color: ${props => props.theme.colors.whites[0]};
  ${color}
`;
