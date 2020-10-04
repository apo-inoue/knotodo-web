import React, { FC } from 'react';
import { PrimaryButton, Box, Text, Divider } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategorySelectItem } from '../2single';
import { useSortFilterCtx } from '../../containers/contexts/sortFilter';
import { Switch, Toggle } from '../../ui/input/Switch';

type CategoryType = { __typename: 'categories' } & Pick<
  Categories,
  'category' | 'id'
>;

type CategoryProps = {
  categories: CategoryType[];
  filterModalToggler: () => void;
};

export const CategoryFilter: FC<CategoryProps> = ({
  categories,
  filterModalToggler,
}) => {
  const {
    filter: {
      filterState: { isAll },
      isAllToggler,
    },
  } = useSortFilterCtx();

  return (
    <>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mb={3}>
        <Text>すべて</Text>
        <Toggle type="radio" onChange={isAllToggler} checked={isAll}>
          <Switch />
        </Toggle>
      </Box>
      {categories.map(category => (
        <Box width="100%" key={category.id}>
          <CategorySelectItem category={category} />
          <Divider />
        </Box>
      ))}
      <PrimaryButton
        variant="contained"
        width="100%"
        onClick={filterModalToggler}
        text="OK"
      />
    </>
  );
};
