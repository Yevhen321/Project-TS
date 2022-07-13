import React from 'react';

export type ColorTypes =
  | 'white'
  | 'black'
  | 'gray'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'blue'
  | 'secondaryGray';

export type VariantTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'label';

export interface TextProps {
  text: string;
  variant?: VariantTypes;
  size?: 'small' | 'medium';
  weight?: 'fontRegular' | 'fontMedium' | 'fontBold';
  color?: ColorTypes;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void | undefined;
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void | undefined;
}
