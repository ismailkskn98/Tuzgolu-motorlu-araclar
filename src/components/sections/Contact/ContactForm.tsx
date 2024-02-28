import { FC, useRef } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { contactSchema } from './Schema.ts';
import CustomInput from './CustomInput.tsx';
import CustomTextarea from './CustomTextarea.tsx';
import emailjs from '@emailjs/browser';
import { InitialValues } from '../../../types/types.ts';
import { formItems } from './FormItems.ts';
import FormBtn from '../../buttons/FormBtn.tsx';

const initialValues: InitialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
};

const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(document.createElement('form'));

  // Form Submit => https://www.emailjs.com/
  const onSubmit = (values: InitialValues, actions: FormikHelpers<InitialValues>) => {
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID')
    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // success
          // console.log('Success!');
          actions.resetForm();
          actions.setSubmitting(false);
        },
        (error) => {
          // error
          console.log(values);
          console.log('Fail', error.text);
        }
      );
  };

  return (
    <main className="w-full lg:w-[60%] bg-transparent py-10 lg:p-10 rounded-l flex items-center justify-center">
      <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={onSubmit}>
        {({ isValid, isSubmitting }) => (
          <Form ref={formRef} className="w-full pb-8 lg:pb-0 grid grid-cols-2 gap-x-6 gap-y-10">
            {formItems.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}
            <CustomTextarea id="message" name="message" label="Mesajınız" />
            <FormBtn isSubmitting={isSubmitting} isValid={isValid} />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default ContactForm;
