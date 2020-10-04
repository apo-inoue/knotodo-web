import React, { FC, useState, ChangeEvent } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Text, Touchable, Box, PrimaryButton } from '../../ui';
import { Categories } from '../../types/graphql';
import { UnderlinedTextForm } from '../../ui/input/TextForm';

type CategoryListItemProps = {
  category: { __typename: 'categories' } & Pick<Categories, 'category' | 'id'>;
  isDeleteAllowed: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, c: string) => void;
};

export const CategoryListItem: FC<CategoryListItemProps> = ({
  category,
  isDeleteAllowed,
  onDelete,
  onUpdate,
}) => {
  const theme = useTheme();
  const [error, setError] = useState<string>('');
  const [editCategory, setEditCategory] = useState<string>(category.category);
  const editCategoryInputHandler = (text: string) => {
    setEditCategory(text);
  };
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const isEditModeToggler = () => {
    setIsEditMode(!isEditMode);
  };
  const onUpdateHandler = () => {
    if (editCategory === '') {
      setError('入力してください');
    } else {
      onUpdate(category.id, editCategory);
      isEditModeToggler();
    }
  };

  return (
    <Box flexDirection="row" height={50} width="100%">
      <Box flex="1 1" justifyContent="center" height="100%">
        {!isEditMode ? (
          <Text textAlign="left" ellipsis>
            {category.category}
          </Text>
        ) : (
          <Box flexDirection="column">
            <UnderlinedTextForm
              placeholder="タイトル"
              err={error}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                editCategoryInputHandler(e.target.value)
              }
              value={editCategory}
            />
            <Text>{error}</Text>
          </Box>
        )}
      </Box>
      <Box
        width={90}
        flexDirection="row"
        my="auto"
        alignItems="center"
        justifyContent="flex-end">
        {!isEditMode ? (
          <>
            <Touchable
              pr={1.2}
              disabled={!isDeleteAllowed}
              onClick={() => onDelete(category.id)}>
              <MdDelete
                size={28}
                color={
                  isDeleteAllowed ? theme.colors.main : theme.colors.blacks[4]
                }
              />
            </Touchable>
            <Touchable pr={0} mr="-2px" onClick={isEditModeToggler}>
              <MdEdit size={28} color={theme.colors.main} />
            </Touchable>
          </>
        ) : (
          <PrimaryButton
            variant="contained"
            text="OK"
            onClick={onUpdateHandler}
          />
        )}
      </Box>
    </Box>
  );
};
