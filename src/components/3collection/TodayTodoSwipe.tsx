import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { Box } from '../../ui';
import { TodoListItem } from '../2single';

type TodoType = { __typename: 'todos' } & Pick<
  Todos,
  | 'title'
  | 'id'
  | 'urgency'
  | 'workload'
  | 'isToday'
  | 'isCompleted'
  | 'category_id'
>;
type TodayTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: string) => void;
  onPostpone: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodayTodoSwipe: FC<TodayTodoSwipeProps> = ({ todo, onPress }) => {
  const onPressEffectHandler = () => {
    onPress(todo.id);
  };

  return (
    <Box flexDirection="row" flex={1} width="100%">
      {/* <Box pl={4} flexDirection="row" flex={1} alignItems="center">
        <Box flexDirection="column" alignItems="flex-end" width="100%">
          <SwipeTodo
            todo={todo}
            onPress={onPostponeEffectHandler}
            btnText="NotToday"
            onDelete={onDelete}
          />
        </Box>
      </Box> */}
      <Box width="100%" bg="white">
        <TodoListItem
          todo={todo}
          buttonAction={{ onPress: onPressEffectHandler, label: 'Complete' }}
        />
      </Box>
    </Box>
  );
};
