import React from 'react';
import { useTheme } from 'styled-components';
import { TouchableProps, Touchable, TouchableType } from './Touchable';
import { Text } from '../typography/Text';

export const PrimaryButton = (
  props: TouchableProps & TouchableType & { text: string },
) => {
  const theme = useTheme();
  const { variant, text } = props;

  return (
    <Touchable color="primary" {...props}>
      <Text
        color={variant === 'outlined' ? theme.colors.main : theme.colors.white}>
        {text}
      </Text>
    </Touchable>
  );
};

export const DangerButton = (
  props: TouchableProps & TouchableType & { text: string },
) => {
  const theme = useTheme();
  const { variant, text } = props;

  return (
    <Touchable color="primary" {...props}>
      <Text
        color={variant === 'outlined' ? theme.colors.main : theme.colors.white}>
        {text}
      </Text>
    </Touchable>
  );
};

export const DisabledButton = (props: TouchableProps & { text: string }) => {
  const theme = useTheme();
  const { variant, text } = props;

  return (
    <Touchable color="primary" {...props}>
      <Text
        color={variant === 'outlined' ? theme.colors.main : theme.colors.white}>
        {text}
      </Text>
    </Touchable>
  );
};
