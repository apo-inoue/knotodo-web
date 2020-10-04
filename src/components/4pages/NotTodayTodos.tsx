import React, { FC } from 'react';
import {
  useSetTodayTodoMutation,
  useCompleteToDoMutation,
  NotTodayTodosQuery,
  useDeleteToDoMutation,
  CompletedTodosQuery,
  Todos,
} from '../../types/graphql';
import {
  NOT_TODAY_TODOS,
  TODAY_TODOS,
  COMPLETED_TODOS,
} from '../../graphql/query/todos';
import { Container } from '../../ui';
import { NotTodayTodosCollection } from '../3collection';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { COMPLETE_TODO } from '../../graphql/mutation/todo';

type NotTodayTodosProps = {
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

export const NotTodayTodos: FC<NotTodayTodosProps> = ({ todos }) => {
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  // ---------- setToday ----------
  const [setToday] = useSetTodayTodoMutation({
    refetchQueries: [
      {
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
      {
        query: COMPLETED_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
    ],
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos =
        existingTodos?.todos.filter(
          t => t.id !== updateData?.update_todos?.returning[0].id ?? '',
        ) ?? [];
      cache.writeQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const setTodayHandler = (id: string) => {
    setToday({ variables: { _eq: id } });
  };
  // ---------- complete ----------
  const [completeTodo] = useCompleteToDoMutation({
    refetchQueries: [
      {
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
      {
        query: COMPLETE_TODO,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
    ],
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos =
        existingTodos?.todos.filter(
          t => t.id !== updateData?.update_todos?.returning[0].id ?? '',
        ) ?? [];
      cache.writeQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
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

  // ---------- delete ----------
  const [deleteToDo] = useDeleteToDoMutation({
    refetchQueries: [
      {
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
      {
        query: COMPLETE_TODO,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
    ],
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<NotTodayTodosQuery>({
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      });
      const newTodos =
        existingTodos?.todos.filter(
          t => t.id !== updateData?.update_todos?.returning[0].id ?? '',
        ) ?? [];
      cache.writeQuery<CompletedTodosQuery>({
        query: NOT_TODAY_TODOS,
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
      <NotTodayTodosCollection
        todos={todos}
        onPress={setTodayHandler}
        onComplete={completeTodoHandler}
        onDelete={deleteToDoHandler}
      />
    </Container>
  );
};
