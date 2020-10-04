import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type Container = Partial<{
  fill: boolean;
  fullWidth: boolean;
  centerContent: boolean;
}> &
  SpaceProps;

export const Container = styled.div<Container>`
  align-items: flex-start;
  background-color: ${props => props.theme.colors.white};
  flex: 1;
  padding-left: 4px;
  padding-right: 4px;

  ${space}

  ${props => props.fill && 'flex: 1'}
  ${props => props.fullWidth && 'width: 100%'}
  ${props =>
    props.centerContent &&
    `
    justifyContent: center;
    alignItems: center;
  `}
`;
