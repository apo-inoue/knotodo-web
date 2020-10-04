import React, { FC } from 'react';
import { Container } from '../../ui';
import {
  useDeleteToDoMutation,
  useRestoreNotTodayMutation,
  CompletedTodosQuery,
  useRestoreTodayMutation,
  Todos,
} from '../../types/graphql';
import { ArchiveTodosCollection } from '../3collection';
import {
  COMPLETED_TODOS,
  TODAY_TODOS,
  NOT_TODAY_TODOS,
} from '../../graphql/query/todos';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

type ArchiveTodosProps = {
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

export const ArchiveTodos: FC<ArchiveTodosProps> = ({ todos }) => {
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
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
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
    ],
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
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
        query: COMPLETED_TODOS,
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
  // ---------- restoreToday ----------
  const [restoreToday] = useRestoreTodayMutation({
    refetchQueries: [
      {
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
      {
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
    ],
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
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
        query: COMPLETED_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const restoreTodayHandler = (id: string) => {
    restoreToday({ variables: { _eq: id } });
  };
  // ---------- restoreNotToday ----------
  const [restoreNotToday] = useRestoreNotTodayMutation({
    refetchQueries: [
      {
        query: TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
      {
        query: NOT_TODAY_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
      },
    ],
    update(cache, { data: updateData }) {
      const existingTodos = cache.readQuery<CompletedTodosQuery>({
        query: COMPLETED_TODOS,
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
        query: COMPLETED_TODOS,
        variables: {
          [sortState.key]: sortState.order,
          _in: categoryIdsVariables,
        },
        data: { __typename: 'query_root', todos: newTodos },
      });
    },
  });
  const restoreNotTodayHandler = (id: string) => {
    restoreNotToday({ variables: { _eq: id } });
  };

  return (
    <Container>
      <ArchiveTodosCollection
        todos={todos}
        onPress={deleteToDoHandler}
        onRestoreToday={restoreTodayHandler}
        onRestoreNotToday={restoreNotTodayHandler}
      />
    </Container>
  );
};
