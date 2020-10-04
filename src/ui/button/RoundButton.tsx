import React, { FC } from 'react';
import { Touchable, TouchableType, TouchableProps } from './Touchable';

export const RoundButton: FC = (
  props: TouchableProps & TouchableType,
  { children },
) => {
  return (
    <Touchable
      variant="contained"
      color="primary"
      height={50}
      width={50}
      borderRadius={25}
      {...props}>
      {children}
    </Touchable>
  );
};
