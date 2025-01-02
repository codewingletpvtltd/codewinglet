'use client';

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
    key={item.value}
    onClick={() => onChange(item.value)}
    className={`border border-gray-100 rounded-full py-2 px-3.5 cursor-pointer lg:text-paragraph2 text-tag ${
      checked ? 'bg-gray-50 border border-gray-400' : ''
    }`}
  >
    {item.label}
  </div>
);
