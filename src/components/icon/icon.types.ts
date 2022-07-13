import { IconTypes } from '../../data/icons';

export type IconProps = {
  name?: IconTypes;
  size?: number;
  stroke?: string;
  fill?: string;
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
  className?: string;
};
