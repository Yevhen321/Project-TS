import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import classes from './sidebar.module.scss';
import { SidebarProps } from './sidebar.types';
import { Icon } from '../icon';
import { IconTypes } from '../../data/icons';
import { Button } from '../button';
import { SidebarMenu } from '../sidebar-menu';
import { ProfileCard } from '../profile-card';
import { LanguageSelect } from '../language-select';
import { menuItems } from './sidebar.constants';

export const SidebarComponent: React.FC<SidebarProps> = ({ userInfo }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div
      className={clsx(
        classes.sidebarWrapper,
        collapsed && classes.sidebarHidden
      )}
    >
      <div
        className={clsx(
          classes.upperBlock,
          collapsed && classes.upperBlockWithOutLogo
        )}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          {!collapsed && (
            <Link to="/" className={classes.logo}>
              <img
                src="https://images.unsplash.com/photo-1655359591190-236264b18d2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="logo"
              />
            </Link>
          )}
          <Icon
            name={collapsed ? IconTypes.ARROW_LEFT : IconTypes.ARROW_RIGHT}
            size={34}
            fill="none"
            stroke="#10A8C9"
            onClick={() => setCollapsed(!collapsed)}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div
          className={clsx(
            !collapsed
              ? classes.buttonIconContent
              : classes.buttonIconContentOnly
          )}
        >
          <Button
            variant="primary"
            size="large"
            text={collapsed ? '' : t('COMMON.NEW_PROJECT', { ns: 'common' })}
            width="full"
            icon={{
              name: IconTypes.PLUS,
              size: 32,
              stroke: '#10A8C9',
            }}
            className={classes.button}
          />
          <div
            className={
              !collapsed
                ? classes.menuItemsWrapper
                : classes.menuItemsWithOutText
            }
          >
            {menuItems &&
              menuItems.map((item, index) => {
                return (
                  <SidebarMenu key={index} {...item} collapsed={collapsed} />
                );
              })}
          </div>
        </div>
      </div>
      <div>
        <ProfileCard userInfo={userInfo} collapsed={collapsed} />
        {!collapsed && <LanguageSelect />}
      </div>
    </div>
  );
};
