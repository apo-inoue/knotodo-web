import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Box } from '../../ui';
import { Todos } from '../../types/graphql';
import { TodayTodoSwipe } from './TodayTodoSwipe';
import { AddFab } from '../1standalone';
import { STACK_ROUTE_NAMES } from '../routes';
import { useTodoCtx } from '../../containers/contexts/todo';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  | 'title'
  | 'id'
  | 'isToday'
  | 'isCompleted'
  | 'urgency'
  | 'workload'
  | 'category_id'
>;
type TodayTodos = {
  todos: TodoType[];
  onPress: (id: string) => void;
  onPostpone: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodayTodos: FC<TodayTodos> = ({
  todos,
  onPress,
  onPostpone,
  onDelete,
}) => {
  const theme = useTheme();
  const history = useHistory();
  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler({ isToday: true, isCompleted: false });
    history.push(STACK_ROUTE_NAMES.newtodo);
  };

  return (
    <>
      <Box mt={2} width="100%" flex={1} flexDirection="column">
        {todos.map(todo => {
          return (
            <Box
              flexDirection="row"
              key={todo.id}
              width="100%"
              mt={theme.space[1]}>
              <TodayTodoSwipe
                todo={todo}
                onPress={onPress}
                onPostpone={onPostpone}
                onDelete={onDelete}
              />
            </Box>
          );
        })}
      </Box>
      <AddFab onClick={mountAndNavigateHandler} />
    </>
  );
};
