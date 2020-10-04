import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Box } from '../ui/layout/Box';
import { ArchiveTodos, TodayTodos, NotTodayTodos } from './4pages';
import { FAB } from '../ui';
import { STACK_ROUTE_NAMES } from './routes';
import { useSortFilterCtx } from '../containers/contexts/sortFilter';
import { useGetAllTodosQuery } from '../types/graphql';
import { Loader } from '../ui/utils/Loader';
import { ErrorMessage } from './1standalone/ErrorMessage';
import { NoDataMessage } from './1standalone/NoDataMessage';

export const Home: FC = () => {
  // newtodo
  const theme = useTheme();
  const history = useHistory();
  const mountAndNavigateHandler = () => {
    history.push(STACK_ROUTE_NAMES.newtodo);
  };

  // query
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  const { loading, error, data } = useGetAllTodosQuery({
    variables: {
      [sortState.key]: sortState.order,
      _in: categoryIdsVariables,
    },
  });

  if (loading) {
    return <Loader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data?.todos.length === 0) {
    return <NoDataMessage />;
  }

  const archiveTodos = data.todos.filter(todo => todo.isCompleted === true);
  const todayTodos = data.todos.filter(
    todo => todo.isCompleted === false && todo.isToday === true,
  );
  const notTodayTodos = data.todos.filter(
    todo => todo.isCompleted === false && todo.isToday === false,
  );

  return (
    <>
      <Box width="100%">
        <Box flexBasis="30%" border="1px solid grey">
          <ArchiveTodos todos={archiveTodos} />
        </Box>
        <Box mr={theme.space[1]} />
        <Box flexBasis="30%" border="1px solid grey">
          <TodayTodos todos={todayTodos} />
        </Box>
        <Box mr={theme.space[1]} />
        <Box flexBasis="30%" border="1px solid grey">
          <NotTodayTodos todos={notTodayTodos} />
        </Box>
        <FAB onClick={mountAndNavigateHandler} />
      </Box>
    </>
  );
};
