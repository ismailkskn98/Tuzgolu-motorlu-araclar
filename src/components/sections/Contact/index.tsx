import { FC } from 'react';
import { Formik, Form } from 'formik';
import { contactSchema } from './Schema.ts';
import CustomInput from './CustomInput.tsx';

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
  {
    id: 'message',
    name: 'message',
    label: 'Mesajınız',
    type: 'text',
  },
];

const Contact: FC = () => {
  const onSubmit = () => {};
  return (
    <section id="iletisim" className="h-[1200px]">
      <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={onSubmit}>
        {() => (
          <Form>
            {formItems.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;
