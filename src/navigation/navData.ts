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
      { label: 'HelloCard', path: '/components/hello-card' },
      { label: 'Counter', path: '/components/counter' },
      { label: 'Login', path: '/components/login' },
      { label: 'List Data', path: '/components/list-data' },
      { label: 'GitHub Users', path: '/components/github-users' },
    ],
  },
  {
    label: 'Hooks',
    children: [
      { label: 'useStateExample', path: '/hooks/UseStateExample' },
      { label: 'useEffectExample', path: '/hooks/UseEffectExample' },
      { label: 'useDeferredValueExample', path: '/hooks/UseDeferredValueExample' },
      { label: 'useMemoExample', path: '/hooks/useMemoExample' },
      { label: 'useRefExample', path: '/hooks/useRefExample' },
      { label: 'useReducerExample', path: '/hooks/useReducerExample' },
      { label: 'useContextExample', path: '/hooks/useContextExample' },
      { label: 'useLayoutEffectExample', path: '/hooks/useLayoutEffectExample' },
      { label: 'useImperativeHandleExample', path: '/hooks/useImperativeHandleExample' },
    ],
  },
];
