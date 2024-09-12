import React, { useState } from 'react';
import './LayoutStyles.css';
import { ManagerSidebar } from '../../components';

const AdminLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`admin-layout ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <ManagerSidebar onToggleSidebar={toggleSidebar} />
        <div className="admin-content">
            <main>{children}</main>
        </div>
    </div>
  );
};

export default AdminLayout;
