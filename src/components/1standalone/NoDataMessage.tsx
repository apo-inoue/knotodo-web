import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Container, Text } from '../../ui';

export const NoDataMessage: FC = () => {
  const theme = useTheme();

  return (
    <Container centerContent>
      <Text color={theme.colors.blacks[7]}>todoがありません。</Text>
    </Container>
  );
};
