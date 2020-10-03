import React, { FC } from 'react';
import { FaHammer } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Box } from '../../ui';

type WorkloadProps = {
  workload: number;
};

export const TodoWorkload: FC<WorkloadProps> = ({ workload }) => {
  const theme = useTheme();
  const workloadArray = [1, 2, 3, 4, 5];

  return (
    <Box display="flex" flexDirection="row">
      {workloadArray.map(num => {
        const isWorkload = num <= workload;

        return (
          <Box key={num}>
            <FaHammer
              size={24}
              color={isWorkload ? theme.colors.main : theme.colors.blacks[3]}
            />
          </Box>
        );
      })}
    </Box>
  );
};
