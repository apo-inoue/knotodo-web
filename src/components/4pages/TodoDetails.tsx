import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Todos } from '../../types/graphql';
import { Container } from '../../ui';
import { ErrorMessage } from '../1standalone';
import { TodoDetailsCollection } from '../3collection';

export const TodoDetails: FC = () => {
  const location = useLocation();
  const todo = (location.state as Todos) ?? undefined;

  if (!todo) return <ErrorMessage />;

  return (
    <Container centerContent>
      <TodoDetailsCollection todo={todo} />
    </Container>
  );
};
