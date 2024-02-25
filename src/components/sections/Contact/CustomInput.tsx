import { FC } from 'react';
import { useField } from 'formik';

type CustomInputProps = {
  id: string;
  name: string;
  label: string;
  type: string;
};

const CustomInput: FC<CustomInputProps> = (props) => {
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);

  return (
    <>
      <div>
        <input {...field} id={props.id} />
        <label htmlFor={props.id}>{props.label}</label>
        <span>A</span>
      </div>
    </>
  );
};

export default CustomInput;
