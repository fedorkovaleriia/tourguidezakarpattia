import React, { useState } from 'react';
import styles from './styles/FilterLocation.module.css';

export default function FilterLocation({ onFilterChange }) {
  const [openType, setOpenType] = useState(false);
  const [selectedType, setSelectedType] = useState('all');

  const toggleDropdown = () => setOpenType(!openType);

  const typeMap = {
    'Всі': 'all',
    'Гори': 'mountains',
    'Термали': 'thermal',
    'Замки': 'castle',
    'Винні локації': 'wine',
    'Озера': 'lake',
    'Національні парки': 'nationalpark',
  };

  const handleSelect = (label) => {
    const backendValue = typeMap[label] || 'all'; 
    setSelectedType(label);
    setOpenType(false);

    onFilterChange({
      type: backendValue,
    });
  };

  return (
    <div className={styles.filterContainer}>
      <h3>Фільтри пошуку</h3>

      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownButton}>
          {selectedType === 'Всі' || selectedType === 'all' ? 'Всі типи' : selectedType}
        </button>

        {openType && (
          <ul className={styles.dropdownMenu}>
            {Object.keys(typeMap).map((label) => (
              <li key={label} onClick={() => handleSelect(label)}>
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
