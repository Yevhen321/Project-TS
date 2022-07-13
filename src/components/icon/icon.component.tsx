import React from 'react';
import clsx from 'clsx';
import classes from './icon.module.scss';
import { IconProps } from './icon.types';
import { ReactSVG } from 'react-svg';

export const SvgIconComponent: React.FC<IconProps> = ({
  stroke = 'currentColor',
  name,
  size = 24,
  fill = 'white',
  onClick,
  style,
  className,
}) => {
  return (
    <ReactSVG
      src={`./assets/icons/${name}.svg`}
      style={style}
      onClick={onClick}
      className={clsx(classes.icon, className)}
      color={stroke}
      beforeInjection={(svg) => {
        svg.classList.add('svg-class-name');
        svg.setAttribute(
          'style',
          `height: ${size}px; width: ${size}px; fill: ${fill}; stroke: ${stroke}`
        );
      }}
    />
  );
};
