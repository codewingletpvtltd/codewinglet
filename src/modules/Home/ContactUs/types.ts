import { FormEvent } from 'react';

export interface InfoProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  detail: React.ReactNode;
}

export interface FormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    errors: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
  };
  onChangeFormData: (e: object) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}
