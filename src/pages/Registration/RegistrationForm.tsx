import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { EntreFormField, registrationFormFieldsArr } from './registrationFormFieldsArr';

import css from './RegistrationForm.module.css';
import Button, { ButtonsType } from '../../components/Button/Buttons';
import { BUTTONS_TITLE } from '../../constants';

type RegistrationFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  repeatPassword: string;
};

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormValues>();

  const onSubmit: SubmitHandler<RegistrationFormValues> = data => console.log(data);

  return (
    <PageWrapper>
      <form className={css.FormWrapper} onSubmit={handleSubmit(onSubmit)}>
        {registrationFormFieldsArr.map((item: EntreFormField) => (
          <div>
            <div className={css.InputWrapper}>
              <label>{item.label}</label>
              <input
                placeholder={item.placeholder}
                className={css.Input}
                {...register(item.name, { required: item.required })}
              />
            </div>
            {errors[item.name] && <span>This field is required</span>}
          </div>
        ))}
        <Button children={BUTTONS_TITLE.SUBMIT} type={ButtonsType.submit} className={css.Button} />
      </form>
    </PageWrapper>
  );
};

export default RegistrationForm;
