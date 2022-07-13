import React from 'react';
import clsx from 'clsx';
import classes from './text.module.scss';
import { TextProps } from './text.types';

export const TextComponent: React.FC<TextProps> = ({
  onClick,
  text,
  variant = 'h5',
  className,
  size,
  color = 'black',
  style,
  weight,
}) => {
  const properties = {
    onClick: onClick,
    className: clsx(
      className,
      classes[variant],
      weight && classes[weight],
      size && classes[size],
      classes[color]
    ),
    style: style,
  };

  const rendering = () => {
    switch (variant) {
      case 'h1':
        return <h1 {...properties}>{text}</h1>;
      case 'h2':
        return <h2 {...properties}>{text}</h2>;
      case 'h3':
        return <h3 {...properties}>{text}</h3>;
      case 'h4':
        return <h4 {...properties}>{text}</h4>;
      case 'h5':
        return <h5 {...properties}>{text}</h5>;
      case 'h6':
        return <h6 {...properties}>{text}</h6>;
      case 'p':
        return <p {...properties}>{text}</p>;
      case 'label':
        return <label {...properties}>{text}</label>;
      default:
        break;
    }
  };
  return <>{rendering()}</>;
};
