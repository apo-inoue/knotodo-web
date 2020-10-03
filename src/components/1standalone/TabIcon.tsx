import React, { FC } from 'react';
import { MdToday, MdEventAvailable, MdDateRange } from 'react-icons/md';

type TabIconProps = {
  tabName: 'today' | 'notToday' | 'archive';
  color: string;
};

export const TabIcon: FC<TabIconProps> = ({ tabName, color }) => {
  if (tabName === 'today') {
    return <MdToday color={color} />;
  }
  if (tabName === 'notToday') {
    return <MdDateRange color={color} />;
  }

  return <MdEventAvailable color={color} />;
};
