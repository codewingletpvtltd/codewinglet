'use client';
import { useLayoutEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';
import { PhoneInputFieldProps } from './types';
const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  onChangeFormData,
  formData,
}) => {
  const [country, setCountry] = useState('us');
  const [phoneVal, setPhoneVal] = useState(formData.phone);
  useLayoutEffect(() => {
    const fetchUserCountry = async () => {
      const storedCountry = localStorage.getItem('user_country');
      if (storedCountry) {
        setCountry(storedCountry);
      } else {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_IP_URL}`);
          if (response.ok) {
            const resData = await response.json();
            const foundCountry = resData.country.toLowerCase();
            setCountry(foundCountry);
            localStorage.setItem('user_country', foundCountry);
          }
        } catch {}
      }
    };

    fetchUserCountry();
  }, []);
  return (
    <>
      <label className='text-gray-800 sm:text-paragraph1 text-tag mb-2.5 block'>
        Phone number
      </label>
      <PhoneInput
        country={country}
        value={phoneVal}
        onChange={(_value, _country, _e, fmtVal) => {
          setPhoneVal(fmtVal == '+' ? '' : fmtVal);
        }}
        onBlur={(e, data) => {
          const enteredValue = e.target.value;
          const submittingValue =
            enteredValue.length >
            ('dialCode' in data ? data.dialCode.length + 1 : 0)
              ? enteredValue
              : '';

          onChangeFormData({
            phone: submittingValue,
          });
        }}
        enableAreaCodes={false}
        placeholder='Enter Your Number'
        inputClass='!w-full !bg-transparent !text-paragraph1ExtraLight !rounded-none !border-x-0 !border-t-0 !border-b !border-gray-800 font-primary'
        buttonClass='!border-x-0 !border-t-0 !border-b !border-gray-800 !rounded-none !bg-transparent'
        dropdownClass='!shadow-[1px_2px_10px_rgba(0,0,0,0.08)]'
      />
    </>
  );
};

export default PhoneInputField;
