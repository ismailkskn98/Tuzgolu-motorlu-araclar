import { FC } from 'react';
import { useField } from 'formik';
import './contact.css';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';

type CustomInputProps = {
  id: string;
  name: string;
  label: string;
  type: string;
};

const CustomInput: FC<CustomInputProps> = (props) => {
  const [field, meta] = useField(props);

  const formIcon = () => {
    switch (props.id) {
      case 'firstName':
        return <BsFillPersonVcardFill />;
      case 'lastName':
        return <BsFillPersonVcardFill />;
      case 'phone':
        return <MdOutlinePhoneAndroid />;
      case 'email':
        return <MdAlternateEmail />;
      default:
        '';
        break;
    }
  };

  return (
    <>
      <article className="form-item relative w-full">
        <input
          {...field}
          {...props}
          required
          autoComplete="off"
          className="px-3 py-4 rounded w-full outline-none border bg-transparent text-dark-gray dark:text-gray-300 text-xs dark:border-gray-600"
        />
        <label
          className="absolute top-1/2 px-1 -translate-y-1/2 left-3 text-sm tracking-wide transition-all bg-white dark:bg-dark-black text-dark-gray dark:text-gray-300"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <span className="absolute top-1/2 -translate-y-1/2 right-3 text-lg tracking-wide text-dark-gray dark:text-gray-300">
          {formIcon()}
        </span>
      </article>
    </>
  );
};

export default CustomInput;
