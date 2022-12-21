import React from 'react';
import { ProfileCardProps } from './profile-card.types';
import classes from './profile-card.module.scss';
import { Avatar } from '../avatar';
import { Text } from '../text';

export const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  collapsed,
  userInfo,
}) => {
  const { name, surname, email, position, groupName } = userInfo;
  return (
    <>
      {!collapsed ? (
        <div className={classes.wrapperCard}>
          <div className={classes.contentWrapper}>
            <div className={classes.badgeContent}>
              <Avatar size='large' name={name} surname={surname} />
              <div>
                <Text
                  variant='h4'
                  text={`${name} ${surname}`}
                  color='white'
                  style={{ margin: '0 0 6px 10px' }}
                />
                <Text
                  variant='label'
                  text={`${email}`}
                  style={{ color: '#9ca4b3', marginLeft: '10px' }}
                />
              </div>
            </div>
            <div>
              <Text variant='label' text='Position' className={classes.label} />
              <Text variant='p' text={`${position}`} className={classes.role} />
              <Text
                variant='label'
                text='Group Name'
                className={classes.label}
              />
              <Text
                variant='p'
                text={`${groupName}`}
                className={classes.role}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Avatar size='large' name={name} surname={surname} />
        </div>
      )}
    </>
  );
};
