import React, { FC, useEffect } from 'react';
import { startOfISOWeek, startOfMonth, startOfYear, formatISO } from 'date-fns';
import { useGetAccomplishmentAndMessageQuery } from '../../types/graphql';
import { Box, Loader } from '../../ui';
import { ErrorMessage, NoDataMessage } from '../1standalone';
import { AccomplishmentAndMessageCollection } from '../3collection';
import { useNavigationCtx } from '../../containers/contexts/navigation';

export const AccomplishmentAndMessage: FC = () => {
  const startWeek = formatISO(startOfISOWeek(new Date()));
  const startMonth = formatISO(startOfMonth(new Date()));
  const startYear = formatISO(startOfYear(new Date()));
  const { loading, error, data, refetch } = useGetAccomplishmentAndMessageQuery(
    {
      variables: {
        _gte1: startWeek,
        _gte2: startMonth,
        _gte3: startYear,
      },
    },
  );
  const {
    state: { isDrawerOpen },
  } = useNavigationCtx();
  useEffect(() => {
    if (isDrawerOpen) {
      refetch();
    }
  }, [isDrawerOpen, refetch]);

  if (loading) {
    return <Loader />;
  }
  if (error || !data) {
    return <ErrorMessage />;
  }
  if (data.users.length === 0) {
    return <NoDataMessage />;
  }

  return (
    <Box>
      <AccomplishmentAndMessageCollection accomplishmentAndMessage={data} />
    </Box>
  );
};
