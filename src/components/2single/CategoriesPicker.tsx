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

export const CategoriesPicker: FC<CategoriesProps> = () => {
  return <Picker width={200} height={100} />;
};

// {
//   categories,
//   categoryId,
//   categorySelectHandler,
// }
