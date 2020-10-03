import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { colorConstants, ColorType } from '../../theme/color';
import { PrimaryButton, Box } from '../../ui';
import { ColorSelectItem } from '../2single';
import { useColorCtx } from '../../containers/contexts/color';

export const Color: FC = () => {
  const history = useHistory();
  const { updateColorTypeHandler } = useColorCtx();
  const handlePress = () => {
    updateColorTypeHandler();
    history.goBack();
  };

  return (
    <Box width="100%" height="100%">
      <Box flexDirection="column" flexBasis="400px">
        {colorConstants.map(colorConstant => (
          <ColorSelectItem itemColor={colorConstant.color} hex={colorConstant.hex} key={colorConstant.color} />
        ))}
      </Box>
      <Box
        flexDirection="column"
        width="100%"
        flex="1 1"
        justifyContent="center"
        alignItems="center">
        <PrimaryButton
          variant="contained"
          width="100%"
          text="設定"
          onClick={handlePress}
        />
      </Box>
    </Box>
  );
};
