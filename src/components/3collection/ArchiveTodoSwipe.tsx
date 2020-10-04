import React, { FC } from 'react';
import { Todos } from '../../types/graphql';
import { Box } from '../../ui';
import { TodoListItem, SwipeArchiveTodo } from '../2single';

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
type ArchiveTodoSwipeProps = {
  todo: TodoType;
  onPress: (id: string) => void;
  onRestoreToday: (id: string) => void;
  onRestoreNotToday: (id: string) => void;
};

export const ArchiveTodoSwipe: FC<ArchiveTodoSwipeProps> = ({
  todo,
  onPress,
  onRestoreToday,
  onRestoreNotToday,
}) => {
  const onPressEffectHandler = () => {
    onPress(todo.id);
  };
  const onRestoreTodayEffectHandler = () => {
    onRestoreToday(todo.id);
  };
  const onRestoreNotTodayEffectHandler = () => {
    onRestoreNotToday(todo.id);
  };

  return (
    <Box>
      <Box pl={4} flexDirection="row" flex={1} alignItems="center">
        <Box flexDirection="column" alignItems="flex-end" width="100%">
          <SwipeArchiveTodo
            todo={todo}
            onRestoreToday={onRestoreTodayEffectHandler}
            onRestoreNotToday={onRestoreNotTodayEffectHandler}
          />
        </Box>
      </Box>
      <Box width="100%" bg="white">
        <TodoListItem
          todo={todo}
          buttonAction={{ onPress: onPressEffectHandler, label: 'Delete' }}
        />
      </Box>
    </Box>
  );
};
