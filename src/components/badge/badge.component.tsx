import React from 'react';
import classes from './badge.module.scss';
import clsx from 'clsx';
import { BadgeProps } from './badge.types';
import { Text } from '../text';

export const BadgeComponent: React.FC<BadgeProps> = ({ type, text }) => {
  return (
    <div
      data-testid="badge"
      className={clsx(
        classes.badgeWrapper,
        type === 'new'
          ? classes.primaryGreen
          : type === 'completed'
          ? classes.secondaryGreen
          : type === 'popular'
          ? classes.primaryOrange
          : type === 'active'
          ? classes.secondaryOrange
          : type === 'recommended'
          ? classes.recommendedBlue
          : type === 'pending'
          ? classes.secondaryBlue
          : type === 'deactivated'
          ? classes.primaryGray
          : type === 'not-available'
          ? classes.secondaryRed
          : type === 'opposite'
          ? classes.opposite
          : ''
      )}
    >
      <Text variant="label" text={text.toUpperCase()}></Text>
    </div>
  );
};
