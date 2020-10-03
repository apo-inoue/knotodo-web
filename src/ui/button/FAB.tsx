import React, { FC } from 'react';
import { RoundButton } from './RoundButton';
import { Box } from '../layout/Box';

export const FAB: FC = () => {
  return (
    <Box position="absolute" bottom={2} right={2}>
      <RoundButton />
    </Box>
  );
};
