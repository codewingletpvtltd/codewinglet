import { ChangeEvent, useEffect, useState } from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
  intermediate?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  intermediate,
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
        className={`h-4 w-4 rounded accent-primary flex-shrink-0 opacity-30 hover:opacity-100 checked:opacity-100 ${
          intermediate ? 'intermediate' : ''
        }`}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className='text-secondary text-paragraph2Light cursor-pointer'>
        {label}
      </label>
    </>
  );
};

export default Checkbox;
