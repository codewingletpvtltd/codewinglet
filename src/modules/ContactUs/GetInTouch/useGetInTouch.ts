'use client';
import { FormEvent, useState } from 'react';
import { useSnackbar } from '@codewinglet/components';

const useGetInTouch = () => {
  const { showSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    errors: { email: '', phone: '' },
  });

  const onChangeFormData = (value: object) => {
    setFormData(Object.assign({ ...formData }, value));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, phone, errors } = formData;

    const isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
    const isValidPhone =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);

    if (!isValidEmail || !isValidPhone) {
      let error = { ...errors };

      if (!isValidEmail) {
        Object.assign(error, { email: 'Please enter valid email address' });
      } else {
        Object.assign(error, { email: '' });
      }

      if (!isValidPhone) {
        Object.assign(error, { phone: 'Please enter valid phone number' });
      } else {
        Object.assign(error, { phone: '' });
      }

      setFormData(
        Object.assign({ ...formData }, { errors: Object.assign(errors, error) })
      );
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        errors: { email: '', phone: '' },
      });
      showSnackbar({ msg: 'Added Successfully', type: 'success' });
    }
  };

  return {
    formData,
    onChangeFormData,
    onSubmit,
  };
};

export default useGetInTouch;
