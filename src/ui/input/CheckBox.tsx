import React, { FC, HTMLProps } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Touchable } from '../button/Touchable';

type CheckBoxProps = {
  checked: boolean;
  onClick: () => void;
  checkColor?: string;
} & HTMLProps<HTMLButtonElement>;

export const CheckBox: FC<CheckBoxProps> = ({
  checked,
  checkColor,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Touchable p={0} {...onClick}>
      {checked ? (
        <MdCheckBox size={24} color={checkColor || theme.colors.main} />
      ) : (
        <MdCheckBoxOutlineBlank size={24} color={theme.colors.blacks[5]} />
      )}
    </Touchable>
  );
};
