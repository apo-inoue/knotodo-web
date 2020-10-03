import styled from 'styled-components';
import { border, BorderProps } from 'styled-system';

type DividerProps = {
  dashed?: boolean;
} & BorderProps;

export const Divider = styled.div<DividerProps>`
  background-color: ${props => props.theme.colors.blacks[5]};
  height: 1px;
  width: 100%;

  ${border}
`;
