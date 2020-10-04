import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Divider } from '../../ui';
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
  const history = useHistory();
  const {
    newTodo: { todoMountHandler },
  } = useTodoCtx();
  const mountAndNavigateHandler = () => {
    todoMountHandler({ isToday: true, isCompleted: false });
    history.push(STACK_ROUTE_NAMES.新規作成);
  };

  return (
    <>
      <Box mt={2} width="100%" flex={1}>
        {todos.map((todo, index) => {
          const isLastRow = todos.length - 1 === index;

          return (
            <Box key={todo.id}>
              <TodayTodoSwipe
                todo={todo}
                onPress={onPress}
                onPostpone={onPostpone}
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
