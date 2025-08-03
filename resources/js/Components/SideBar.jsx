// Sidebar.jsx
import React from 'react';
import navItems from '../admin/navConfig';

const Sidebar = ({ role }) => {
  const items = navItems[role] || [];

  return (
    <div className="p-3 bg-light border-end" style={{ minHeight: '100vh' }}>
      <h5>{role.toUpperCase()}</h5>
      <ul className="nav flex-column">
        {items.map((item, index) => (
          <li className="nav-item" key={index}>
            <a href={item.path} className="nav-link text-dark">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
