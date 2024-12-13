'use client';
import Link from 'next/link';
import { useState } from 'react';

type Option = {
  label: string;
};

interface DropdownProps {
  options: Option[];
  buttonText?: string;
  containerClassName?: string; // Class for the outer container
  buttonClassName?: string; // Class for the dropdown button
  menuClassName?: string; // Class for the dropdown menu
  optionClassName?: string; // Class for individual options
}

const Dropdown = ({
  options = [],
  buttonText = 'Options',
  containerClassName = '',
  buttonClassName = '',
  menuClassName = '',
  optionClassName = '',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(buttonText);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionLabel: any) => {
    setSelected(optionLabel);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${containerClassName}`}>
      <button
        type='button'
        className={`flex justify-between items-center w-[270px] h-12 px-4 py-2 font-medium bg-white border border-headerBoxBorder focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-indigo-500 ${buttonClassName}`}
        onClick={toggleDropdown}
      >
        {selected}
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.00193 13.5C8.75998 13.5 8.51807 13.4055 8.3336 13.2168L2.52889 7.27654C2.15964 6.89867 2.15964 6.28601 2.52889 5.90829C2.898 5.53057 3.49656 5.53057 3.86585 5.90829L9.00193 11.1645L14.138 5.90847C14.5073 5.53075 15.1058 5.53075 15.4749 5.90847C15.8443 6.28619 15.8443 6.89885 15.4749 7.27672L9.67026 13.217C9.48571 13.4057 9.24379 13.5 9.00193 13.5Z'
            fill='black'
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 w-[270px] mt-2 origin-top-right shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 ${menuClassName}`}
        >
          <div>
            {options.map((option, index) => (
              <Link
                key={index}
                href='#'
                className={`block px-4 py-2 text-sm text-secondary hover:bg-bg ${optionClassName}`}
                onClick={() => handleOptionClick(option.label)}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
