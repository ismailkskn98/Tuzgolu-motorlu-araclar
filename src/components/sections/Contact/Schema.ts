import * as Yup from 'yup';

export const contactSchema = Yup.object({
  firstname: Yup.string().required('Ad alanı zorunludur'),
  lastname: Yup.string().required('Soyad alanı zorunludur'),
  phone: Yup.string()
    .matches(/^05\d{9}$/, 'Geçerli bir telefon numarasi giriniz')
    .required('Telefon alanı zorunludur'),
  email: Yup.string().email('Geçerli bir email giriniz'),
  message: Yup.string().required('Mesaj alanı zorunludur'),
});
