import React, { FC } from 'react';
import { RoundButton } from './RoundButton';
import { Box } from '../layout/Box';
import { TouchableProps, TouchableType } from './Touchable';

export const FAB: FC<TouchableProps> = (
  props: TouchableProps & TouchableType,
  { children },
) => {
  return (
    <Box
      position="absolute"
      bottom={2}
      right={2}
      style={{
        boxShadow:
          '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      }}>
      <RoundButton {...props}>{children}</RoundButton>
    </Box>
  );
};
