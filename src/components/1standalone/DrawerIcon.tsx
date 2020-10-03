import React, { FC } from 'react';
import {
  MdInvertColors,
  MdExitToApp,
  MdHome,
  MdFolderOpen,
  MdChatBubbleOutline,
} from 'react-icons/md';

type DrawerIconProps = {
  drawerName:
    | 'color'
    | 'home'
    | 'categorySetting'
    | 'messageSetting'
    | 'logout';
  color: string;
};

export const DrawerIcon: FC<DrawerIconProps> = ({ drawerName, color }) => {
  if (drawerName === 'color') {
    return <MdInvertColors color={color} />;
  }
  if (drawerName === 'categorySetting') {
    return <MdFolderOpen color={color} />;
  }
  if (drawerName === 'messageSetting') {
    return <MdChatBubbleOutline color={color} />;
  }
  if (drawerName === 'logout') {
    return <MdExitToApp color={color} />;
  }

  return <MdHome color={color} />;
};
