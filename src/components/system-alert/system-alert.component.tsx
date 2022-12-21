import React from 'react';
import { IconTypes } from '../../data/icons';
import { Icon } from '../icon';
import classes from './system-alert.module.scss';
import { Text } from '../text';
import { SystemAlertProps } from './system-alert.types';
import clsx from 'clsx';

export const SystemAlertComponent: React.FC<SystemAlertProps> = ({
  type,
  width,
  message,
}) => {
  return (
    <div
      data-testid='system-alert'
      className={clsx(
        classes.alertWrapper,
        type === 'success'
          ? classes.success
          : type === 'error'
          ? classes.error
          : type === 'warning'
          ? classes.warning
          : classes.info,
        width === 'full' && classes.fullWidth
      )}
    >
      <div className={classes.iconWrapper}>
        <Icon
          size={24}
          name={
            type === 'success'
              ? IconTypes.SUCCESS
              : type === 'error'
              ? IconTypes.ERROR
              : type === 'warning'
              ? IconTypes.WARNING
              : type === 'info'
              ? IconTypes.INFO
              : IconTypes.NONE
          }
          stroke={
            type === 'success'
              ? '#03d087'
              : type === 'error'
              ? '#d82045'
              : type === 'warning'
              ? '#f2994a'
              : '#10a8c9'
          }
        />
      </div>
      <Text
        text={`${
          type === 'success'
            ? 'Success: '
            : type === 'warning'
            ? 'Warning: '
            : type === 'error'
            ? 'Error: '
            : 'Info: '
        } ${message}`}
        variant='h6'
        color={type}
      />
    </div>
  );
};
