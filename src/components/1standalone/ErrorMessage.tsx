import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Container, Text } from '../../ui';

export const ErrorMessage: FC = () => {
  const theme = useTheme();

  return (
    <Container centerContent>
      <Text color={theme.colors.danger}>エラーが発生しました。</Text>
    </Container>
  );
};
