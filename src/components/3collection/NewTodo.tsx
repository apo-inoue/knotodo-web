import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PrimaryButton, Box, UnderlinedTextForm } from '../../ui';
import { Categories, InsertToDoMutationVariables } from '../../types/graphql';
import {
  CategoriesPicker,
  TodoUrgencySelect,
  TodoWorkloadSelect,
} from '../2single';
import { useTodoCtx } from '../../containers/contexts/todo';

type NewTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: ({
    title,
    urgency,
    workload,
    isToday,
    isCompleted,
    category_id,
  }: InsertToDoMutationVariables) => void;
};

export const NewTodo: FC<NewTodoProps> = ({ categories, onPress }) => {
  const history = useHistory();
  const [error, setError] = useState<string>('');
  const {
    newTodo: {
      state: { title, urgency, workload, isToday, isCompleted, category_id },
      todoClearHandler,
      titleInputHandler,
      workloadSelectHandler,
      urgencySelectHandler,
      categorySelectHandler,
    },
  } = useTodoCtx();
  const category: string = category_id === '' ? categories[0].id : category_id;
  const insertAndNavigateHandler = () => {
    if (title === '') {
      setError('入力してください');
    } else {
      onPress({
        title,
        urgency,
        workload,
        isToday,
        isCompleted,
        category_id: category,
      });
      history.goBack();
    }
  };
  const cancelAndNavigateHandler = () => {
    todoClearHandler();
    history.goBack();
  };

  return (
    <>
      <Box width="80%">
        <UnderlinedTextForm
          placeholder="タイトル"
          autoFocus
          err={error}
          onChange={(e) => titleInputHandler(e.target.value)}
          value={title}
        />
      </Box>
      <Box mt={3}>
        <TodoWorkloadSelect
          workload={workload}
          workloadSelectHandler={workloadSelectHandler}
        />
      </Box>
      <Box mt={3}>
        <TodoUrgencySelect
          urgency={urgency}
          urgencySelectHandler={urgencySelectHandler}
        />
      </Box>
      <Box>
        <CategoriesPicker
          categories={categories}
          categoryId={category_id}
          categorySelectHandler={categorySelectHandler}
        />
      </Box>
      <Box mt={4} flexDirection="row">
        <PrimaryButton
          variant="outlined"
          width="30%"
          onClick={cancelAndNavigateHandler}
          text="キャンセル"
        />
        <Box mr={3} />
        <PrimaryButton
          variant="contained"
          width="30%"
          text="追加"
          onClick={insertAndNavigateHandler}
        />
      </Box>
    </>
  );
};
