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
    <div className="w-full lg:w-[60%] bg-transparent p-10 rounded-l flex items-center justify-center">
      <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={onSubmit}>
        {() => (
          <Form className="w-full grid grid-cols-[repeat(1, 1fr)] lg:grid-cols-[repeat(2, minmax(300, 1fr))] gap-6">
            {formItems.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
            <CustomTextarea id="message" name="message" label="Mesajınız" />
            <button className="justify-self-end col-span-1 col-end-3 w-32 py-[9px] rounded bg-light-teal text-white dark:bg-dark-gray">
              Gönder
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
