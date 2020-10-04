import React, { FC, ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PrimaryButton, Box, UnderlinedTextForm } from '../../ui';
import { Categories, UpdateTodoMutationVariables } from '../../types/graphql';
import {
  CategoriesPicker,
  TodoUrgencySelect,
  TodoWorkloadSelect,
} from '../2single';
import { useTodoCtx } from '../../containers/contexts/todo';

type EditTodoProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  onPress: ({
    id,
    title,
    urgency,
    workload,
  }: UpdateTodoMutationVariables) => void;
};

export const EditTodo: FC<EditTodoProps> = ({ categories, onPress }) => {
  const history = useHistory();
  const [error, setError] = useState<string>('');
  const {
    editTodo: {
      state: { id, title, urgency, workload, category_id },
      titleInputHandler,
      workloadSelectHandler,
      urgencySelectHandler,
      categorySelectHandler,
    },
  } = useTodoCtx();
  const category: string = category_id === '' ? categories[0].id : category_id;
  const updateAndNavigateHandler = () => {
    if (title === '') {
      setError('入力してください');
    } else {
      onPress({
        id,
        title,
        urgency,
        workload,
        category_id: category,
      });
      history.goBack();
    }
  };

  return (
    <>
      <Box width="80%">
        <UnderlinedTextForm
          placeholder="タイトル"
          err={error}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            titleInputHandler(e.target.value)
          }
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
          onClick={() => history.goBack()}
          text="キャンセル"
        />
        <Box mr={3} />
        <PrimaryButton
          variant="contained"
          width="30%"
          text="保存"
          onClick={updateAndNavigateHandler}
        />
      </Box>
    </>
  );
};
