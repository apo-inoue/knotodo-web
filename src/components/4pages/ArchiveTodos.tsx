import React, { FC } from 'react';
import { Container } from '../../ui';
import {
  useCompletedTodosQuery,
  useDeleteToDoMutation,
  useRestoreNotTodayMutation,
  CompletedTodosQuery,
  useRestoreTodayMutation,
} from '../../types/graphql';
import { ArchiveTodosCollection } from '../3collection';
import { ErrorMessage } from '../1standalone/ErrorMessage';
import { NoDataMessage } from '../1standalone/NoDataMessage';
import { COMPLETED_TODOS } from '../../graphql/query/todos';

import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { Loader } from '../../ui/utils/Loader';

export const ArchiveTodos: FC = () => {
  const {
    sort: { sortState },
    filter: {
      filterState: { isAll, categoryIds },
    },
  } = useSortFilterCtx();
  const categoryIdsVariables = isAll ? null : categoryIds;
  const { loading, error, data } = useCompletedTodosQuery({
    variables: { [sortState.key]: sortState.order, _in: categoryIdsVariables },
  });
  const [deleteToDo] = useDeleteToDoMutation({
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

  if (loading) {
    return <Loader />;
  }
  if (error || !data) {
    return (
      <>
        <ErrorMessage />
      </>
    );
  }
  if (data?.todos.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Container>
      <ArchiveTodosCollection
        todos={data.todos}
        onPress={deleteToDoHandler}
        onRestoreToday={restoreTodayHandler}
        onRestoreNotToday={restoreNotTodayHandler}
      />
    </Container>
  );
};
