import React, { useState, useRef, useEffect } from 'react';
import './MegaMenu.css';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Open menu
  const handleMouseEnter = () => setIsOpen(true);

  // Close menu
  const handleMouseLeave = () => setIsOpen(false);

  // Close menu if clicked outside
  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="mega-menu"
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="menu-button">Electronics</button>
      {isOpen && (
        <div className="mega-menus">
        <div className="menu-content">
          <div className="menu-category">
            <h3>Mobile</h3>
            <ul>
              <li><a href="#link1" onClick={() => console.log('Option 1 clicked')}>Mi</a></li>
              <li><a href="#link2" onClick={() => console.log('Option 2 clicked')}>Samsung</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Real ME</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Oppo</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>infinix</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>apple</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>vivo</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Asus</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Iphone</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Motrola</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Infix Hot9</a></li>
            </ul>
          </div>
          <div className="menu-category1">
            <h3>Laptop</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Gaming Laptops</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Desktop PC'S</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Hard Disk</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <h3>Television</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Sound bars</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Speakers</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>bluetooth Speakers</a></li>
            </ul>
          </div>

          <div className="menu-category1">
            <h3>Mobile Accessories</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Mobile Cases</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Power Banks</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Screen Cards</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Earbuds</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Mobile cable</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Mobile Chargers</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Mobile Holder</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Smart Watches</a></li>
            </ul>
          </div>
          <div className="menu-category">
            <h3>Mobile Accessories</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Mobile Cases</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Power Banks</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Screen Cards</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Earbuds</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Mobile cable</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Mobile Chargers</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Mobile Holder</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Smart Watches</a></li>
            </ul>
          </div>

          {/* <div className="menu-category">
            <h3>Category 2</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Option 4</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Option 5</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Option 6</a></li>
            </ul>
          </div> */}
          
          {/* <div className="menu-category">
            <h3>Category 2</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Option 4</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Option 5</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Option 6</a></li>
            </ul>
          </div> */}

          {/* <div className="menu-category">
            <h3>Category 2</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Option 4</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Option 5</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Option 6</a></li>
            </ul>
          </div> */}
          {/* Add more categories and options as needed */}
        </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
