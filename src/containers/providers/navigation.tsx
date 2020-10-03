import React, { FC, useState } from 'react';
import { NavigationCtxProvider } from '../contexts/navigation';

export const NavigationProvider: FC = ({ children }) => {
  const [state, setIsDrawerOpen] = useState<{isDrawerOpen: boolean}>({isDrawerOpen: false});
  const drawerToggler = () => {
    return setIsDrawerOpen({isDrawerOpen: !state.isDrawerOpen})
  }

  const value = {
    state,
    drawerToggler
  };

  return (
    <NavigationCtxProvider value={value}>{children}</NavigationCtxProvider>
  );
};
