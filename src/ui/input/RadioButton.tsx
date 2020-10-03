import React, { FC } from 'react';
import { Box } from '../layout/Box';
import { Text } from '../typography/Text';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Touchable, TouchableProps } from '../button/Touchable';
import { HTMLProps } from 'react';

type RadioButton = {
  radioColor?: string;
  checked: boolean;
} & TouchableProps;

export const RadioButton: FC<RadioButton> = (props: TouchableProps, {checked, radioColor}) => {
  const theme = useTheme()

  return (
    <Touchable p={0} {...props}>
      {checked ? (
        <MdCheckBox size={24} color={radioColor || theme.colors.main} />
      ) : (
        <MdCheckBoxOutlineBlank size={24} color={theme.colors.blacks[5]} />
      )}
    </Touchable>
  );
};
