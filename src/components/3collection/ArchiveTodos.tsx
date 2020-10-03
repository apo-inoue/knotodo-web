import React, { FC, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Box, Divider } from '../../ui';
import { Todos } from '../../types/graphql';
import { ArchiveTodoSwipe } from './ArchiveTodoSwipe';

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
type ArchiveTodosType = {
  todos: TodoType[];
  onPress: (id: string) => void;
  onRestoreToday: (id: string) => void;
  onRestoreNotToday: (id: string) => void;
};

export const ArchiveTodos: FC<ArchiveTodosType> = ({
  todos,
  onPress,
  onRestoreToday,
  onRestoreNotToday,
}) => {
  const [isScrollable, setIsScrollable] = useState(true);
  const enableScrollHandler = () => {
    setIsScrollable(true);
  };
  const disableScrollHandler = () => {
    setIsScrollable(false);
  };

  return (
    <Box mt={2} width="100%">
      {todos.map((todo, index) => {
          const isLastRow = todos.length - 1 === index;

          return (
            <Box>
            <ArchiveTodoSwipe
              todo={todo}
              onPress={onPress}
              onRestoreToday={onRestoreToday}
              onRestoreNotToday={onRestoreNotToday}
              enableScrollHandler={enableScrollHandler}
              disableScrollHandler={disableScrollHandler}
            />
            <Divider />
            {isLastRow && <Box mb={5} />}
          </Box>
          )
      })}
    </Box>
  );
};
