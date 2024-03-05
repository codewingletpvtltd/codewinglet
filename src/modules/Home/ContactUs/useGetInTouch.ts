'use client';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useSnackbar } from '@codewinglet/components';
import { STRAPI_API_URL } from '@codewinglet/constants/constants';

const getIsValidEmail = (email: string) =>
  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);

const useGetInTouch = () => {
  const { showSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    errors: { email: '', name: '', message: '' },
    isSubmitted: false,
  });

  const onChangeFormData = (value: object) => {
    setFormData(Object.assign({ ...formData }, value));
  };

  const validateFields = (validateValues: typeof formData) => {
    const { email, message, name, errors } = validateValues;

    const isValidEmail = getIsValidEmail(email);

    if (!isValidEmail || !message) {
      let error = { ...errors };

      if (!email) {
        Object.assign(error, { email: 'Email address is required.' });
      } else if (!isValidEmail) {
        Object.assign(error, { email: 'Please enter valid email address.' });
      } else {
        Object.assign(error, { email: '' });
      }

      if (!name) {
        Object.assign(error, { name: 'Name is required.' });
      } else Object.assign(error, { name: '' });

      if (!message) {
        Object.assign(error, { message: 'Message is required.' });
      } else {
        Object.assign(error, { message: '' });
      }

      setFormData(
        Object.assign(
          { ...validateValues },
          { errors: Object.assign(errors, error) }
        )
      );
      return false;
    }

    setFormData({
      ...validateValues,
      errors: { email: '', message: '', name: '' },
    });
    return true;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateFields(formData);

    if (!formData.isSubmitted) {
      setFormData({ ...formData, isSubmitted: true });
    }

    if (isValid) {
      setIsLoading(true);

      await axios.post('/api/slack-alert', {
        data: {
          email: formData.email,
          message: formData.message,
          name: formData.name,
          phone: formData.phone,
        },
      });

      await axios
        .post(STRAPI_API_URL + '/api/contacts', {
          data: {
            ...formData,
            source_url: window.location.origin,
          },
        })
        .then(() => {
          showSnackbar({
            msg: 'Thank you for reaching out to us! will get back to you.',
            type: 'success',
          });

          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            errors: { email: '', message: '', name: '' },
            isSubmitted: true,
          });
        })
        .catch((error) => {
          showSnackbar({ msg: error.message, type: 'error' });
        });
      setIsLoading(false);
    }
  };
  return {
    formData,
    onChangeFormData,
    onSubmit,
    isLoading,
  };
};

export default useGetInTouch;
