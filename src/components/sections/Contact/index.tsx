import { FC } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
const Contact: FC = () => {
  return (
    <section id="iletisim" className="pt-10">
      <header className="wrapper mx-auto mb-10">
        <h1 className="pb-4 font-bold text-5xl w-full text-center text-dark-gray dark:text-dark-white">İletişim</h1>
        <p className="text-light-teal/60 dark:text-gray-400 italic text-center">
          Herhangi bir sorunuz veya yorumunuz var mı? Bize bir mesaj yazmanız yeterli!
        </p>
      </header>
      <main className="relative wrapper bg-white dark:bg-dark-black p-4 mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between mt-10 overflow-hidden rounded">
        <ContactInfo />
        <ContactForm />
        <div className="absolute -bottom-8 right-16 bg-contact-bg w-64 h-36 -rotate-[30deg]"></div>
      </main>
    </section>
  );
};

export default Contact;
