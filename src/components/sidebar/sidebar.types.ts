import React from 'react';
import { IconTypes } from '../../data/icons';

export type MenuItems = {
  icon: IconTypes;
  name: string;
  path: string;
};

export type UserInfoProps = {
  name?: string;
  surname?: string;
  email?: string;
  position?: string;
  groupName?: string;
};

export interface SidebarProps {
  menuItems?: MenuItems[];
  userInfo: UserInfoProps;
  children?: React.ReactNode;
}
