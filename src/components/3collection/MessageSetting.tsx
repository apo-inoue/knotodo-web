import React, { FC, ChangeEvent, useState } from 'react';
import { useTheme } from 'styled-components';
import { Box, Text, PrimaryButton } from '../../ui';
import { UnderlinedTextForm } from '../../ui/input/TextForm';

type MessageSettingProps = {
  message: string | null;
  onPress: (message: string) => void;
};

export const MessageSetting: FC<MessageSettingProps> = ({
  message,
  onPress,
}) => {
  const theme = useTheme();
  const [error, setError] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const onChangeTextHandler = (text: string) => {
    setValue(text);
  };
  const onPressHandler = () => {
    if (value === '') {
      setError('入力してください');
    } else {
      onPress(value);
    }
  };

  return (
    <Box width="100%" flex="1 1" justifyContent="center" alignItems="center">
      <Text textAlign="center" color={theme.colors.blacks[7]}>
        今のヒトコト
      </Text>
      <Text textAlign="center">{message || '未設定'}</Text>
      <Box mt="24px" />
      <UnderlinedTextForm
        err={error}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeTextHandler(e.target.value)
        }
        value={value}
      />
      <Text color={theme.colors.danger}>{error}</Text>
      <PrimaryButton
        width="100%"
        variant="contained"
        text="更新"
        onClick={onPressHandler}
      />
    </Box>
  );
};
