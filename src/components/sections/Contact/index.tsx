import { FC } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
const Contact: FC = () => {
  return (
    <section id="iletisim" className="h-[1200px]">
      <div className="wrapper mx-auto mb-3">
        <h1 className="pb-3 text-5xl w-full text-center">İletişim</h1>
        <p className="text-gray-600 italic text-center">Bize buradan ulaşarak sorularınızı sorabilirsiniz</p>
      </div>
      <main className="wrapper mx-auto flex items-start justify-between">
        <ContactForm />
        <ContactInfo />
      </main>
    </section>
  );
};

export default Contact;
