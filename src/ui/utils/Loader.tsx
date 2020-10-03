import React from 'react';
import styled from 'styled-components';
import { flex, FlexProps } from 'styled-system';
import { Container } from '../layout/Container';

type ActivityIndicatorProps = FlexProps;

export const Loader = styled.div<ActivityIndicatorProps>`
  align-self: center;
  display: flex;
  ${flex}
`;

export const ScreenLoader = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};
