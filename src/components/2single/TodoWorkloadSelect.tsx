import React, { FC } from 'react';
import { FaHammer } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Box, Touchable } from '../../ui';

type TodoWorkloadSelectProps = {
  workload: number;
  workloadSelectHandler: (workload: number) => void;
};

export const TodoWorkloadSelect: FC<TodoWorkloadSelectProps> = ({
  workload,
  workloadSelectHandler,
}) => {
  const theme = useTheme();
  const workloadArray = [1, 2, 3, 4, 5];

  return (
    <Box display="flex" flexDirection="row">
      {workloadArray.map(num => {
        const isWorkload = num <= workload;
        const handleSelect = () => {
          workloadSelectHandler(num);
        };

        return (
          <Box key={num}>
            <Touchable onClick={handleSelect}>
              <FaHammer
                size={24}
                color={isWorkload ? theme.colors.main : theme.colors.blacks[3]}
              />
            </Touchable>
          </Box>
        );
      })}
    </Box>
  );
};
