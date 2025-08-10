import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type NavChild = { label: string; path: string };
export type NavGroup = {
  label: string;
  icon?: IconDefinition;
  children: NavChild[];
};

export const NAV: NavGroup[] = [
  {
    label: 'Components',
    children: [
      { label: 'Counter', path: '/components/counter' },
      { label: 'Login', path: '/components/login' },
      { label: 'List Data', path: '/components/list-data' },
    ],
  },
  {
    label: 'Hooks',
    children: [
      { label: 'useState', path: '/hooks/useState' },
      { label: 'useEffect', path: '/hooks/useEffect' },
    ],
  },
];
