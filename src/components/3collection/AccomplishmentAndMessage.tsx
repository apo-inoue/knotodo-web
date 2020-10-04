import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Box, Text } from '../../ui';
import { GetAccomplishmentAndMessageQuery } from '../../types/graphql';
import { prizeReckoner } from '../../helpers/prizeReckoner';

type AccomplishmentAndMessageProps = {
  accomplishmentAndMessage: GetAccomplishmentAndMessageQuery;
};

export const AccomplishmentAndMessage: FC<AccomplishmentAndMessageProps> = ({
  accomplishmentAndMessage,
}) => {
  const theme = useTheme();
  const { year, month, week } = accomplishmentAndMessage;
  const { message } = accomplishmentAndMessage.users[0];
  const weeklyAccomplishment = week.aggregate?.count ?? 0;
  const prizeScore = useMemo(() => prizeReckoner(weeklyAccomplishment), [
    weeklyAccomplishment,
  ]);
  const Prize = () => {
    switch (prizeScore) {
      case 3:
        return (
          <Text textAlign="center" fontWeight="bold">
            <span role="img" aria-label="star">
              ✨✨
            </span>
            Excellent work!
            <span role="img" aria-label="star">
              ✨✨
            </span>
          </Text>
        );
      case 2:
        return (
          <Text textAlign="center">
            <span role="img" aria-label="star">
              ✨
            </span>
            Well done!
            <span role="img" aria-label="star">
              ✨
            </span>
          </Text>
        );
      case 1:
        return (
          <Text textAlign="center">
            <span role="img" aria-label="star">
              ✨
            </span>
            Good job!
            <span role="img" aria-label="star">
              ✨
            </span>
          </Text>
        );
      case 0:
        return <Text textAlign="center">Let&apos;s start it today</Text>;
      default:
        return <Text textAlign="center">Let&apos;s start it today</Text>;
    }
  };
  const accomplishmentIntervals = [
    {
      interval: '今週',
      count: week.aggregate?.count ?? 0,
    },
    { interval: '今月', count: month.aggregate?.count ?? 0 },
    { interval: '今年', count: year.aggregate?.count ?? 0 },
  ];

  return (
    <Box my={3}>
      {accomplishmentIntervals.map(accomplishmentInterval => {
        return (
          <Box key={accomplishmentInterval.interval}>
            <Text textAlign="center">
              {accomplishmentInterval.interval}
              <Text>{accomplishmentInterval.count}</Text>タスククリア
            </Text>
          </Box>
        );
      })}
      <Box mt={2}>
        <Prize />
      </Box>
      <Box mt={4}>
        <Text textAlign="center" color={theme.colors.blacks[7]}>
          ヒトコト
        </Text>
        <Text textAlign="center">{message || '未設定'}</Text>
      </Box>
    </Box>
  );
};
