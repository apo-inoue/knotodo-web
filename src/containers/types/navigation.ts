export type NavigationState = {
  isDrawerOpen: boolean
};

export type NavigationCtxType = {
  state: NavigationState;
  drawerToggler: () => void;
};
