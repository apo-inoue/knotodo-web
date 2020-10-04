import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, ScreenLoader } from '../../ui';
import { ErrorMessage, NoDataMessage, AddFab } from '../1standalone';
import { TodayTodosCollection } from '../3collection';
import {
  useTodayTodosQuery,
  useCompleteToDoMutation,
  useSetNotTodayTodoMutation,
  TodayTodosQuery,
  useDeleteToDoMutation,
} from '../../types/graphql';
import { TODAY_TODOS } from '../../graphql/query/todos';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { useTodoCtx } from '../../containers/contexts/todo';
import { STACK_ROUTE_NAMES } from '../routes';

export const TodayTodos: FC = () => {
  const history = useHistory();
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  const { loading, error, data } = useTodayTodosQuery({
    variables: {
      [sortState.key]: sortState.order,
      _in: categoryIdsVariables,
    },
  });
  // ---------- complete ----------
  const [completeTodo] = useCompleteToDoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos =
        existingTodos?.todos.filter(
          t => t.id !== updateData?.update_todos?.returning[0].id ?? '',
        ) ?? [];
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const completeTodoHandler = (id: string) => {
    completeTodo({ variables: { _eq: id } });
  };
  // ----------- notToday ----------
  const [setToday] = useSetNotTodayTodoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos =
        existingTodos?.todos.filter(
          t => t.id !== updateData?.update_todos?.returning[0].id ?? '',
        ) ?? [];
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setNotTodayHandler = (id: string) => {
    setToday({ variables: { _eq: id } });
  };

  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler({ isToday: true, isCompleted: false });
    history.push(STACK_ROUTE_NAMES.新規作成);
  };
  // ---------- delete ----------
  const [deleteToDo] = useDeleteToDoMutation({
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos =
        existingTodos?.todos.filter(
          t => t.id !== updateData?.update_todos?.returning[0].id ?? '',
        ) ?? [];
      cache.writeQuery<TodayTodosQuery>({
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const deleteToDoHandler = (id: string) => {
    deleteToDo({ variables: { _eq: id } });
  };

  // useEffect(
  //   useCallback(() => {
  //     refetch();
  //   }, [refetch]),
  // );

  if (loading) return <ScreenLoader />;
  if (error || !data) return <ErrorMessage />;
  if (data?.todos.length === 0)
    return (
      <>
        <NoDataMessage />
        <AddFab onClick={mountAndNavigateHandler} />
      </>
    );

  return (
    <Container>
      <TodayTodosCollection
        todos={data.todos}
        onPress={completeTodoHandler}
        onPostpone={setNotTodayHandler}
        onDelete={deleteToDoHandler}
      />
    </Container>
  );
};
