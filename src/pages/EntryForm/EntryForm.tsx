import React, { useState } from 'react';
import './EntryForm.css';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { ENTRY_FORM_KEYS, FORM_LABELS, FORM_TYPES } from '../../constants/entryForm.const';

interface IEntryForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateAttendance: Date;
}

interface IFormFieldsArr {
  label: string;
  type: string;
  id: string;
  value: any;
  onChange: any;
}

export const EntryForm: React.FC = () => {
  const [formData, setFormData] = useState<IEntryForm>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateAttendance: new Date(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const formFieldsArr: IFormFieldsArr[] = [
    {
      label: FORM_LABELS.FIRST_NAME,
      type: FORM_TYPES.TEXT,
      id: ENTRY_FORM_KEYS.FIRST_NAME,
      value: formData.firstName,
      onChange: (e: any) => setFormData({ ...formData, firstName: e.target.value }),
    },
    {
      label: FORM_LABELS.LAST_NAME,
      type: FORM_TYPES.TEXT,
      id: ENTRY_FORM_KEYS.LAST_NAME,
      value: formData.lastName,
      onChange: (e: any) => setFormData({ ...formData, lastName: e.target.value }),
    },
    {
      label: FORM_LABELS.EMAIL,
      type: FORM_TYPES.EMAIL,
      id: ENTRY_FORM_KEYS.EMAIL,
      value: formData.email,
      onChange: (e: any) => setFormData({ ...formData, email: e.target.value }),
    },
    {
      label: FORM_LABELS.PHONE_NUMBER,
      type: FORM_TYPES.TEL,
      id: ENTRY_FORM_KEYS.PHONE_NUMBER,
      value: formData.phoneNumber,
      onChange: (e: any) => setFormData({ ...formData, phoneNumber: e.target.value }),
    },
    {
      label: FORM_LABELS.DATA_ATTENDANCE,
      type: FORM_TYPES.DATE,
      id: ENTRY_FORM_KEYS.DATA_ATTENDANCE,
      value: formData.dateAttendance,
      onChange: (e: any) => setFormData({ ...formData, dateAttendance: e.target.value }),
    },
  ];

  return (
    <PageWrapper>
      <form onSubmit={handleSubmit}>
        {formFieldsArr.map(item => (
          <div>
            <label htmlFor={item.id}>{item.label}</label>
            <input
              type={item.type}
              id={item.id}
              value={item.value}
              onChange={item.onChange}
              required
            />
          </div>
        ))}
        <button type="submit">{FORM_LABELS.SUBMIT}</button>
      </form>
    </PageWrapper>
  );
};

export default EntryForm;
