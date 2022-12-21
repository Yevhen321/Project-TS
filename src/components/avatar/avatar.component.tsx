import React from 'react';
import { AvatarProps } from './avatar.types';
import classes from './avatar.module.scss';
import clsx from 'clsx';

export const AvatarComponent: React.FC<AvatarProps> = ({
  size,
  name,
  surname,
  image,
}) => {
  return (
    <div
      data-testid='avatar'
      className={clsx(
        classes.avatar,
        classes.white,
        size === 'small'
          ? classes.small
          : size === 'large'
          ? classes.large
          : classes.medium
      )}
      style={{ backgroundImage: image ? `url(${image})` : 'none' }}
    >
      {!image && (
        <>
          {name?.split('')[0]}
          {surname?.split('')[0]}
        </>
      )}
    </div>
  );
};
