import React, { FC } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { FAB } from '../../ui/button/FAB';
import { TouchableProps } from '../../ui/button/Touchable';

export const AddFab: FC<TouchableProps> = props => {
  const theme = useTheme();

  return (
    <FAB {...props}>
      <MdAddCircle name="plus" size={25} color={theme.colors.white} />
    </FAB>
  );
};
