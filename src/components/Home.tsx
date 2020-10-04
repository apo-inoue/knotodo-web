import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Box } from '../ui/layout/Box';
import { ArchiveTodos, TodayTodos, NotTodayTodos } from './4pages';

export const Home: FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box width="100%">
        <Box flexBasis="30%" border="1px solid grey">
          <ArchiveTodos />
        </Box>
        <Box mr={theme.space[1]} />
        <Box flexBasis="30%" border="1px solid grey">
          <TodayTodos />
        </Box>
        <Box mr={theme.space[1]} />
        <Box flexBasis="30%" border="1px solid grey">
          <NotTodayTodos />
        </Box>
      </Box>
    </>
  );
};
