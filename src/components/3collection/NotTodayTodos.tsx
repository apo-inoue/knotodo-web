import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Divider } from '../../ui';
import { Todos } from '../../types/graphql';
import { AddFab } from '../1standalone/AddFab';
import { STACK_ROUTE_NAMES } from '../routes';
import { NotTodayTodoSwipe } from './NotTodayTodoSwipe';
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
type NotTodayTodos = {
  todos: TodoType[];
  onPress: (id: string) => void;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export const NotTodayTodos: FC<NotTodayTodos> = ({
  todos,
  onPress,
  onComplete,
  onDelete,
}) => {
  const history = useHistory();
  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler({ isToday: false, isCompleted: false });
    history.push(STACK_ROUTE_NAMES.新規作成);
  };

  return (
    <>
      <Box mt={2} width="100%" flex={1}>
        {todos.map((todo, index) => {
          const isLastRow = todos.length - 1 === index;

          return (
            <Box key={todo.id}>
              <NotTodayTodoSwipe
                todo={todo}
                onPress={onPress}
                onComplete={onComplete}
                onDelete={onDelete}
              />
              <Box width="100%" />
              <Divider />
              {/* // NOTE: FABが重なって押しにくくなるのを避けるため余白を追加する */}
              {isLastRow && <Box mb={5} />}
            </Box>
          );
        })}
      </Box>
      <AddFab onClick={mountAndNavigateHandler} />
    </>
  );
};
