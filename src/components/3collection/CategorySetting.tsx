import React, {
  FC,
  ChangeEvent,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { PrimaryButton, Box, Divider, UnderlinedTextForm } from '../../ui';
import { Categories } from '../../types/graphql';
import { CategoryListItem } from '../2single';
import { useCategoryCtx } from '../../containers/contexts/category';

type CategoryType = { __typename: 'categories' } & Pick<
  Categories,
  'category' | 'id'
>;

type CategorySettingProps = {
  categories: CategoryType[];
  onPress: () => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, c: string) => void;
};

export const CategorySetting: FC<CategorySettingProps> = ({
  categories,
  onPress,
  onDelete,
  onUpdate,
}) => {
  const {
    state: { category },
    categoryInputHandler,
  } = useCategoryCtx();
  const isDeleteAllowed = categories.length > 0;
  const [error, setError] = useState<string>('');
  const onPressWithValidation = () => {
    if (category === '') {
      setError('入力してください');
    } else {
      onPress();
    }
  };

  useEffect(useCallback(() => setError(''), []));

  return (
    <Box width="100%" flex="1 1">
      <Box mt={2} width="100%" />
      <Box flexDirection="column" flexBasis="40%">
        {categories.map(cate => (
          <>
            <CategoryListItem
              category={cate}
              isDeleteAllowed={isDeleteAllowed}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
            <Divider />
          </>
        ))}
      </Box>
      <Box width="100%" flex="1 1" justifyContent="center" alignItems="center">
        <Box justifyContent="center" width="100%" px={4}>
          <UnderlinedTextForm
            placeholder="カテゴリの名前"
            err={error}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              categoryInputHandler(e.target.value)
            }
            value={category}
          />
        </Box>
        <Box mt={3} justifyContent="center" width="100%" px={4}>
          <PrimaryButton
            variant="contained"
            width="100%"
            text="追加"
            onClick={onPressWithValidation}
          />
        </Box>
      </Box>
    </Box>
  );
};
