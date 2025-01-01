import { ChangeEvent, useEffect, useState } from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <>
      <input
        type='checkbox'
        className='h-4 w-4 rounded accent-gray-800 flex-shrink-0 cursor-pointer'
        checked={isChecked}
        onChange={handleChange}
      />
      <label className='text-gray-400 text-paragraph2Light cursor-pointer'>
        {label}
      </label>
    </>
  );
};

export default Checkbox;
