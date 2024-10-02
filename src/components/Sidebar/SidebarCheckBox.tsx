'use client';

import Checkbox from '@codewinglet/components/CheckBox/CheckBox';

interface SidebarCheckBoxProps {
  item: {
    label: string;
    value: string;
  };
  index: number;
  checked: boolean;
  onChange: (value: string) => void;
}

export const SidebarCheckBox = ({
  item,
  index,
  checked,
  onChange,
}: SidebarCheckBoxProps) => (
  <div
    className='flex items-center gap-2 p-3.5 hover:bg-bg cursor-pointer'
    key={index}
  >
    <Checkbox
      key={item.value}
      label={item.label}
      checked={checked}
      onChange={() => onChange(item.value)}
    />
  </div>
);
