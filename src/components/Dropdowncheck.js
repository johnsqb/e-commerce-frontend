import React, { useState, useEffect } from 'react';
import './CheckboxDropdown.css'; // Import CSS for styling


const CheckboxDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, label: 'Blue'},
    { id: 2, label: 'Green' },
    { id: 3, label: 'yellow' },
    { id: 4, label: 'Red' },
  ];

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions(prev =>
      checked ? [...prev, value] : prev.filter(option => option !== value)
    );
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        
        {selectedOptions.length ? selectedOptions.join(', ') : 'Select Options'}
        
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map(option => (
            <label key={option.id} className="dropdown-item">
              <input
                type="checkbox"
                value={option.label}
                checked={selectedOptions.includes(option.label)}
                onChange={handleCheckboxChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
