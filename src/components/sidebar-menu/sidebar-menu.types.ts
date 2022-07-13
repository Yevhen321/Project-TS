import { IconTypes } from '../../data/icons';

export type MenuItem = {
  icon: IconTypes;
  name: string;
  path: string;
  collapsed?: boolean;
};
