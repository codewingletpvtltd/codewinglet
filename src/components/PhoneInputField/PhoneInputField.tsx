'use client';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';
import { PhoneInputFieldProps } from './types';
const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  onChangeFormData,
  formData,
}) => (
  <PhoneInput
    country={'in'}
    value={formData.phone}
    onChange={(_value, _country, _e, formattedValue) => {
      onChangeFormData({ phone: formattedValue });
    }}
    enableAreaCodes={false}
    countryCodeEditable={false}
    placeholder='Enter Your Number'
    inputClass='!w-full !bg-transparent !text-paragraph1ExtraLight !rounded-none !border-x-0 !border-t-0 !border-b !border-primary'
    buttonClass='!border-x-0 !border-t-0 !border-b !border-primary !rounded-none !bg-none'
  />
);

export default PhoneInputField;
