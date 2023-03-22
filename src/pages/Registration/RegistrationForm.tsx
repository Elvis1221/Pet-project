import React, { useState } from 'react';

import './RegistrationForm.css';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

type RegistrationFormValues = {
  email: string;
  name: string;
  phone: string;
  password: string;
};

const RegistrationForm: React.FC = () => {
  const [values, setValues] = useState<RegistrationFormValues>({
    email: '',
    name: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <PageWrapper>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </PageWrapper>
  );
};

export default RegistrationForm;
