import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="burger-icon fixed top-4 left-4 w-8 h-1 bg-black rounded-sm cursor-pointer"
        onClick={handleToggle}
      >
        Burger
      </button>
      <div
        className={`burger-menu fixed top-0 left-0 w-full h-full overflow-hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="menu-items fixed top-0 left-0 w-full h-full bg-gray-200 flex flex-col items-center justify-center list-none">
          <li className="mb-4" onClick={handleToggle}>
            Menu Item 1
          </li>
          <li className="mb-4">Menu Item 2</li>
          <li className="mb-4">Menu Item 3</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
