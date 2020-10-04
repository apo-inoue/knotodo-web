import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Box, Text, PrimaryButton, Divider } from '../../ui';
import knot from '../../assets/knot-color.png';

type LogIn = {
  onLogIn: () => void;
};

export const LogIn: FC<LogIn> = ({ onLogIn }) => {
  const theme = useTheme();

  return (
    <>
      <Box flexDirection="row" alignItems="flex-end">
        <Box mr={2}>
          <img alt="logo" src={knot} />
        </Box>
        <Box height={40}>
          <Text fontSize={40} lineHeight="50px" fontWeight="bold" color="main">
            KnoToDo
          </Text>
        </Box>
      </Box>
      <Box width="100%">
        <Divider />
      </Box>
      <Text color={theme.colors.blacks[5]}>
        Tomorrow never comes, it is alway today
      </Text>
      <Box mt={4}>
        <PrimaryButton
          variant="contained"
          onClick={onLogIn}
          text="ログイン/新規登録"
        />
      </Box>
    </>
  );
};
