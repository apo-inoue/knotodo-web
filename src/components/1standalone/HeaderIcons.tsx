import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { MdFormatLineSpacing, MdMenu } from 'react-icons/md';
import { FiFilter } from 'react-icons/Fi';
import { Box } from '../../ui';

import { useSortFilterCtx } from '../../containers/contexts/sortFilter';

export const HeaderIconLeft: FC = () => {
  const theme = useTheme();

  return (
    <Box ml={3}>
      <MdMenu size={24} color={theme.colors.white} />
    </Box>
  );
};

type HeaderIconsRightProps = {
  isFiltered: boolean;
  onPressSort: () => void;
  onPressFilter: () => void;
};

export const HeaderIconsRight: FC<HeaderIconsRightProps> = ({
  isFiltered,
  onPressSort,
  onPressFilter,
}) => {
  const theme = useTheme();
  const {
    filter: {
      filterState: { isAll },
    },
  } = useSortFilterCtx();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const iconName = useMemo(() => (isAll ? 'filter' : 'filter-plus'), [
    isFiltered,
  ]);

  return (
    <Box flexDirection="row" mr={3}>
      <MdFormatLineSpacing
        size={24}
        color={theme.colors.white}
        onClick={onPressSort}
      />
      <Box mr={3} />
      <FiFilter
        name={iconName}
        size={24}
        color={theme.colors.white}
        onClick={onPressFilter}
      />
    </Box>
  );
};
