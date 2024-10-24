'use client';
import PhoneInput from 'react-phone-input-2';

import { PhoneInputFieldProps } from './types';
import 'react-phone-input-2/lib/style.css';
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
  />
);

export default PhoneInputField;
