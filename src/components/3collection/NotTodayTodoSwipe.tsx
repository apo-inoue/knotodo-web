import React, { FC } from 'react';
import { TodoListItem } from '../2single';
import { Todos } from '../../types/graphql';
import { Box } from '../../ui';
import { SwipeTodo } from '../2single/SwipeTodo';

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
type NotTodayTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: string) => void;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export const NotTodayTodoSwipe: FC<NotTodayTodoSwipeProps> = ({
  todo,
  onPress,
  onComplete,
  onDelete,
}) => {
  const onPressEffectHandler = () => {
    onPress(todo.id);
  };
  const onCompleteEffectHandler = () => {
    onComplete(todo.id);
  };

  return (
    <Box>
      <Box pl={4} flexDirection="row" flex={1} alignItems="center">
        <Box flexDirection="column" alignItems="flex-end" width="100%">
          <SwipeTodo
            todo={todo}
            onPress={onCompleteEffectHandler}
            btnText="Complete"
            onDelete={onDelete}
          />
        </Box>
      </Box>
      <Box width="100%" bg="white">
        <TodoListItem
          todo={todo}
          buttonAction={{ onPress: onPressEffectHandler, label: 'Today' }}
        />
      </Box>
    </Box>
  );
};
