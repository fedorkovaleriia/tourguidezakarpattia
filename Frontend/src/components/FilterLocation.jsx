import React, { useState } from 'react';
import styles from './styles/FilterLocation.module.css';

export default function FilterLocation() {
  const [openType, setOpenType] = useState(false);
  const [selectedType, setSelectedType] = useState('all');

  const toggleDropdown = () => setOpenType(!openType);

  const handleSelect = (value) => {
    setSelectedType(value);
    setOpenType(false);
  };

  return (
    <div className={styles.filterContainer}>
      <h3>Фільтри пошуку</h3>

      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownButton}>
          {selectedType === 'all' ? 'Всі типи' : selectedType}
        </button>

        {openType && (
          <ul className={styles.dropdownMenu}>
            <li onClick={() => handleSelect('Всі')}>Всі</li>
            <li onClick={() => handleSelect('Гори')}>Гори</li>
            <li onClick={() => handleSelect('Термали')}>Термали</li>
            <li onClick={() => handleSelect('Замки')}>Замки</li>
            <li onClick={() => handleSelect('Винні локації')}>Винні локації</li>
            <li onClick={() => handleSelect('Озера')}>Озера</li>
            <li onClick={() => handleSelect('Національні парки')}>
              Національні парки
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
