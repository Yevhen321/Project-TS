import { MenuItem } from '../sidebar-menu';
import { IconTypes } from '../../data/icons';

export const menuItems: MenuItem[] = [
  {
    icon: IconTypes.STATISTIC,
    name: 'Statistics',
    path: '/statistics',
  },
  {
    icon: IconTypes.PROJECTS,
    name: 'Projects',
    path: '/projects',
  },
  {
    icon: IconTypes.MENU,
    name: 'Catalogue',
    path: '/catalogue',
  },
  {
    icon: IconTypes.NOTIFICATIONS,
    name: 'Notifications',
    path: '/notifications',
  },
];
