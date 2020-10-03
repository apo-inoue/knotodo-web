import React, { FC } from 'react';
import { Picker } from '../../ui';
import { Categories } from '../../types/graphql';

type CategoriesProps = {
  categories: ({ __typename: 'categories' } & Pick<
    Categories,
    'category' | 'id'
  >)[];
  categoryId: string;
  categorySelectHandler: (categoryId: string) => void;
};

export const CategoriesPicker: FC<CategoriesProps> = ({
  categories,
  categoryId,
  categorySelectHandler,
}) => {
  return (
    <Picker
      width={200}
      height={100}
      selectedValue={categoryId}
      mode="dropdown"
      onValueChange={categorySelectHandler}>
      {categories.map(category => {
        return (
          <Picker.Item
            key={category.id}
            label={category.category}
            value={category.id}
          />
        );
      })}
    </Picker>
  );
};
