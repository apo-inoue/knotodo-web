import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Todos } from '../../types/graphql';
import { Touchable, PrimaryButton, Box, Text } from '../../ui';
import { STACK_ROUTE_NAMES } from '../routes';
import { useTodoCtx } from '../../containers/contexts/todo';
import { TodoState } from '../../containers/types/todo';

type TodoListItem = {
  todo: { __typename: 'todos' } & Pick<
    Todos,
    | 'title'
    | 'id'
    | 'isToday'
    | 'isCompleted'
    | 'urgency'
    | 'workload'
    | 'category_id'
  >;
  buttonAction: {
    label: string;
    onPress: (id: string) => void;
  };
};

export const TodoListItem: FC<TodoListItem> = ({ todo, buttonAction }) => {
  const history = useHistory();
  const location = useLocation();
  const {
    editTodo: { todoMountHandler },
  } = useTodoCtx();
  const isToday = location.pathname === 'Today';
  const isCompleted = location.pathname === 'Archive';
  const mountAndNavigateHandler = () => {
    const mountTodo: { id: string } & TodoState = {
      id: todo.id,
      title: todo.title,
      category_id: todo.category_id,
      urgency: todo.urgency,
      workload: todo.workload,
      isToday,
      isCompleted,
    };
    todoMountHandler(mountTodo);
    history.push(STACK_ROUTE_NAMES.編集);
  };

  return (
    <Box flexDirection="row" height={50} width="100%">
      <Touchable
        width={300}
        p={0}
        justifyContent="center"
        onClick={mountAndNavigateHandler}>
        <Box flex="1 1" justifyContent="center">
          <Text textAlign="left" ellipsis>
            {todo.title}
          </Text>
        </Box>
      </Touchable>
      <Box width={100} flexDirection="row" justifyContent="flex-end">
        <PrimaryButton
          variant="outlined"
          onClick={() => buttonAction.onPress(todo.id)}
          text={buttonAction.label}
        />
      </Box>
    </Box>
  );
};
