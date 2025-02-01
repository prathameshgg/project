import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ 
  isOpen, 
  onClose,
  items,
  currentPath
}: { 
  isOpen: boolean, 
  onClose: () => void,
  items: Array<{ path: string, label: string, icon: JSX.Element }>,
  currentPath: string 
}) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      
      <div className={styles.sidebarContent}>
        <nav className={styles.sidebarNav}>
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.sidebarItem} ${
                currentPath === item.path ? styles.active : ''
              }`}
              onClick={onClose}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 