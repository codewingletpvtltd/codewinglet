'use client';

import { useState } from 'react';

import Checkbox from '@codewinglet/components/CheckBox/CheckBox';

interface SidebarCheckBoxProps {
  item: {
    label: string;
    value: string;
  };
  index: number;
}

const SidebarCheckBox = ({ item, index }: SidebarCheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: any) => {
    setIsChecked(checked);
  };

  return (
    <div
      className='flex items-center gap-2 p-3.5 hover:bg-bg cursor-pointer'
      key={index}
    >
      <Checkbox
        key={item.value}
        label={item.label}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default SidebarCheckBox;
