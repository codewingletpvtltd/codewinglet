'use client';

import Airtable from 'airtable';
import * as CompanyEmailValidator from 'company-email-validator';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const getIsValidEmail = (email: string) =>
  CompanyEmailValidator.isCompanyEmail(email);

const initialData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  errors: { email: '', phone: '', name: '', message: '' },
  isSubmitted: false,
};

const AIRTABLE_BASE_ID = 'app9MMhABzNbnRCl2';

const useGetInTouch = () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_SECRET_API_TOKEN,
  }).base(AIRTABLE_BASE_ID);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const onChangeFormData = (value: object) => {
    setFormData(Object.assign({ ...formData }, value));
  };

  const validateFields = (validateValues: typeof formData) => {
    const { email, message, name, errors, phone } = validateValues;

    const isValidEmail = getIsValidEmail(email);

    const phoneRegex = /^\+?[0-9()\- ]*$/;
    const isPhoneValid = phone ? phoneRegex.test(phone) : true;

    if (!isValidEmail || !message || !isPhoneValid) {
      let error = { ...errors };

      if (!isPhoneValid) {
        Object.assign(error, { phone: 'Please enter valid phone number.' });
      } else {
        Object.assign(error, { phone: '' });
      }

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
      errors: { email: '', phone: '', message: '', name: '' },
    });
    return true;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const isValid = validateFields(formData);

    if (!formData.isSubmitted) {
      setFormData({ ...formData, isSubmitted: true });
    }

    if (isValid) {
      base('Contact US').create(
        [
          {
            fields: {
              Name: formData.name,
              Email: formData.email,
              'Contact Number': formData.phone,
              Description: formData.message,
            },
          },
        ],
        function (err, records) {
          if (err) {
            setIsLoading(false);
            toast.error(err.message);
          }
          records?.forEach(function () {
            setIsLoading(false);
            setFormData(initialData);
            toast.success(
              'Thank you for your inquiry. We will respond shortly.'
            );
          });
        }
      );
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
