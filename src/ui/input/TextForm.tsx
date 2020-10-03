import React, { FC } from 'react';
import { TextInputProps, TextInput } from './TextInput';
import { Text } from '../typography/Text';

type TextFormProps= {
  err: null | string;
} & TextInputProps;

export const OutlinedTextForm: FC<TextFormProps> = (props:  TextInputProps, { error }) => {
  return (
    <>
      <TextInput variant="outlined" {...props} />
      <Text>{error}</Text>
    </>
  );
};

export const UnderlinedTextForm: FC<TextFormProps> = (props: TextInputProps, { error }) => {
  return (
    <>
      <TextInput variant="underlined" {...props} />
      <Text>{error}</Text>
    </>
  );
};
