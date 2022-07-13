import React from 'react';

export interface SystemAlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  className?: string;
  style?: React.CSSProperties;
  width?: 'full' | 'content';
  message?: string;
}
