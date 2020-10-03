import { background, BackgroundProps } from 'styled-system';
import styled from 'styled-components';
import { ReactNode } from 'react';

type Image = BackgroundProps &
  HTMLImageElement &
  Readonly<{ children?: ReactNode }>;

export const Image = styled.img<Image>`
  ${background}
`;
