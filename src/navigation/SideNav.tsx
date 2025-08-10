import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import type { NavGroup } from './navData';
import './SideNav.css';

interface SideNavProps {
  title?: string;
  groups: NavGroup[];
  // controlled mobile toggle (optional)
  open?: boolean;
  onToggleOpen?: (open: boolean) => void;
}

export default function SideNav({ title = 'My App', groups, open, onToggleOpen }: SideNavProps) {
  const loc = useLocation();
  const [internalOpen, setInternalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isOpen = open ?? internalOpen;
  const setOpen = onToggleOpen ?? setInternalOpen;

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const activeGroupIndex = useMemo(
    () => groups.findIndex((g) => g.children.some((c) => loc.pathname.startsWith(c.path))),
    [groups, loc.pathname]
  );
  useEffect(() => {
    if (activeGroupIndex >= 0) setExpanded((p) => ({ ...p, [activeGroupIndex]: true }));
  }, [activeGroupIndex]);

  return (
    <>
      {/* Mobile topbar */}
      <div className='sn-topbar'>
        <button className='sn-burger' aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className='sn-title'>{title}</div>
      </div>

      {/* Mobile overlay */}
      <div className={`sn-overlay ${isOpen ? 'is-open' : ''}`} onClick={() => setOpen(false)} />

      {/* Sidebar */}
      <aside className={`sn ${isOpen ? 'is-open' : ''} ${isCollapsed ? 'closed' : ''}`} aria-label='Primary'>
        <div className='sn-header'>
          <div className='sn-brand' title={title}>
            {title}
          </div>
          <button
            className='sn-close'
            aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

        <nav className='sn-nav'>
          {groups.map((group, i) => {
            const isExpanded = !!expanded[i];
            const isGroupActive = group.children.some((c) => loc.pathname.startsWith(c.path));
            return (
              <div key={group.label} className='sn-group'>
                <button
                  className={`sn-groupBtn ${isExpanded ? 'is-expanded' : ''} ${isGroupActive ? 'is-active' : ''}`}
                  onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                  aria-expanded={isExpanded}
                  data-tooltip={group.label}
                >
                  {group.icon && <FontAwesomeIcon icon={group.icon} className='sn-groupIcon' />}
                  <span className='sn-groupLabel'>{group.label}</span>
                  <FontAwesomeIcon icon={faChevronDown} className='sn-chev' />
                </button>

                <div className={`sn-children ${isExpanded ? 'is-open' : ''}`}>
                  {group.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) => 'sn-link' + (isActive ? ' is-active' : '')}
                      onClick={() => setOpen(false)}
                    >
                      <span className='sn-dot' />
                      <span className='sn-label'>{child.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
