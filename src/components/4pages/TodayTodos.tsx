import React, { FC } from 'react';
import { Container } from '../../ui';
import { TodayTodosCollection } from '../3collection';
import {
  useCompleteToDoMutation,
  useSetNotTodayTodoMutation,
  TodayTodosQuery,
  useDeleteToDoMutation,
  Todos,
} from '../../types/graphql';
import { TODAY_TODOS } from '../../graphql/query/todos';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type TodayTodosProps = {
  todos: ({
    __typename: 'todos';
  } & Pick<
    Todos,
    | 'urgency'
    | 'workload'
    | 'id'
    | 'title'
    | 'isCompleted'
    | 'isToday'
    | 'category_id'
  >)[];
};

export const TodayTodos: FC<TodayTodosProps> = ({ todos }) => {
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  // ---------- complete ----------
  const [completeTodo] = useCompleteToDoMutation({
    onCompleted: () => window.location.reload(),
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
    onCompleted: () => window.location.reload(),
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

  // ---------- delete ----------
  const [deleteToDo] = useDeleteToDoMutation({
    onCompleted: () => window.location.reload(),
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

  return (
    <Container>
      <TodayTodosCollection
        todos={todos}
        onPress={completeTodoHandler}
        onPostpone={setNotTodayHandler}
        onDelete={deleteToDoHandler}
      />
    </Container>
  );
};
