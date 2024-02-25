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
      <div className="relative w-full">
        <input
          {...field}
          {...props}
          className="px-3 py-3 rounded w-full outline-none border bg-transparent dark:border-gray-600 dark:bg-dark-gray"
        />
        <label
          className="absolute top-1/2 -translate-y-1/2 left-3 text-xs tracking-wide text-dark-gray dark:text-gray-300"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <span className="absolute top-1/2 -translate-y-1/2 right-3 text-sm tracking-wide text-dark-gray">A</span>
      </div>
    </>
  );
};

export default CustomInput;
