import React, {FC} from 'react'
import { useTheme } from 'styled-components';
import { Box } from '../ui/layout/Box';
import { ArchiveTodos ,TodayTodos,NotTodayTodos } from './4pages';

export const Home:FC = () => {
  const theme =useTheme()

  return (
    <Box flexDirection="row">
      <ArchiveTodos/>
      <Box mr={theme.space[2]}/>
      <TodayTodos />
      <Box mr={theme.space[2]}/>
      <NotTodayTodos />
    </Box>
  )
}