import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../icon';
import { Text } from '../text';
import { MenuItem } from './sidebar-menu.types';
import classes from './sidebar-menu.module.scss';

export const SidebarMenuItemComponent: React.FC<MenuItem> = ({
  icon,
  name,
  path,
  collapsed,
}) => {
  return (
    <div className={classes.itemWrapper}>
      <Icon name={icon} size={25} fill="none" stroke="#9CA4B3" />
      {!collapsed && (
        <Link to={path}>
          <Text
            text={name}
            color="gray"
            size="medium"
            weight="fontBold"
            className={classes.text}
          />
        </Link>
      )}
    </div>
  );
};
