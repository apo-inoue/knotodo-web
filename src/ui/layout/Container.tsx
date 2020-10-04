import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type ContainerProps = Partial<{
  fill: boolean;
  fullWidth: boolean;
  centerContent: boolean;
}> &
  SpaceProps;

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  flex: 1;
  height: 100%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  ${space}

  ${props => props.fill && 'flex: 1'}
  ${props => props.fullWidth && 'width: 100%'}
  ${props =>
    props.centerContent &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;
