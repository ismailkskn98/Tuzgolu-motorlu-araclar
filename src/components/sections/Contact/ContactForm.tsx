import { FC } from 'react';
import { Formik, Form } from 'formik';
import { contactSchema } from './Schema.ts';
import CustomInput from './CustomInput.tsx';
import CustomTextarea from './CustomTextarea.tsx';

type InitialValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

type formItem = {
  id: string;
  name: string;
  label: string;
  type: string;
};

const initialValues: InitialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
};

const formItems: formItem[] = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'Adınız',
    type: 'text',
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Soyadınız',
    type: 'text',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Telefon Numarası',
    type: 'text',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email Adresi',
    type: 'text',
  },
];

const ContactForm: FC = () => {
  const onSubmit = () => {};
  return (
    <div className="flex-grow bg-white p-10 rounded flex items-center justify-center">
      <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={onSubmit}>
        {() => (
          <Form className="w-full grid grid-cols-2 gap-5">
            {formItems.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
            <CustomTextarea id="message" name="message" label="Mesajınız" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
