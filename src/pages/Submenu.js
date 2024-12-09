import React, { useState, useRef, useEffect } from 'react';
import './MegaMenu.css';

const SubMenu = () => {
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
      <button className="menu-button">Men</button>
      {isOpen && (
        <div className="mega-menus">
        <div className="menu-content">
          <div className="menu-category">
            <h3>Footwear</h3>
            <ul>
              <li><a href="#link1" onClick={() => console.log('Option 1 clicked')}>Sport shoes</a></li>
              <li><a href="#link2" onClick={() => console.log('Option 2 clicked')}>Casual shoes </a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Formal Shoes</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Boots</a></li>
              <li><a href="#link3" onClick={() => console.log('Option 3 clicked')}>Sneakers</a></li>
            </ul>
          </div>
          <div className="menu-category1">
            <h3>Winter wear</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Sweater</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Sweat shirts</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Track Suits</a></li>
            </ul>
          </div>

          <div className="menu-category">
            <h3>Watches</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Fast Track</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Casio</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Times</a></li>
            </ul>
          </div>

          <div className="menu-category1">
            <h3>Clothes</h3>
            <ul>    
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Shirts</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>T-shirts</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Formal shirts</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Casual shirts</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}><b className='bw'>Bottom wear</b></a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Shorts</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Track pants</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Casual Trousers</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Formal Trousers</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Cargos</a></li>
            </ul>
          </div>
          <div className="menu-category">
            <h3>Ethnic wear</h3>
            <ul>
              <li><a href="#link4" onClick={() => console.log('Option 4 clicked')}>Kurta</a></li>
              <li><a href="#link5" onClick={() => console.log('Option 5 clicked')}>Lungi</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Ethnic sets</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}><b className="bw">Men's Grooming</b></a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Deodarant</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Perfumes</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Shaving & After shave</a></li>
              <li><a href="#link6" onClick={() => console.log('Option 6 clicked')}>Beard caring & Grooming</a></li>
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

export default SubMenu;
