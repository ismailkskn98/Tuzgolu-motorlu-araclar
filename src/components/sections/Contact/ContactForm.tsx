import { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { contactSchema } from './Schema.ts';
import CustomInput from './CustomInput.tsx';
import CustomTextarea from './CustomTextarea.tsx';
import { SyncLoader } from 'react-spinners';

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

const onSubmit = (values: InitialValues, actions: FormikHelpers<InitialValues>) => {
  console.log(values);
  setTimeout(() => {
    actions.resetForm();
    actions.setSubmitting(false);
  }, 2000);
};

const ContactForm: FC = () => {
  return (
    <main className="w-full lg:w-[60%] bg-transparent py-10 lg:p-10 rounded-l flex items-center justify-center">
      <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={onSubmit}>
        {({ isValid, isSubmitting }) => (
          <Form className="w-full pb-8 lg:pb-0 grid grid-cols-2 gap-x-6 gap-y-10">
            {formItems.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
            <CustomTextarea id="message" name="message" label="Mesajınız" />
            <button
              type="submit"
              className="relative z-10 justify-self-end col-span-1 col-end-3 px-10 py-[9px] cursor-pointer rounded hover:bg-light-teal bg-light-teal text-white dark:bg-dark-gray"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? (
                <p className="flex gap-1 items-center group:hover:text-cyan-500 ">
                  Gönderiliyor
                  <SyncLoader className="transition-all" color="white" size={5} />
                </p>
              ) : (
                'Gönder'
              )}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default ContactForm;
