import { FC } from 'react';
import { useField } from 'formik';
import './contact.css';

type CustomTextareaProps = {
  id: string;
  name: string;
  label: string;
};

const CustomTextarea: FC<CustomTextareaProps> = (props) => {
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);

  return (
    <>
      <div className="form-item relative col-span-2">
        <textarea
          {...field}
          {...props}
          required
          className="px-3 py-4 w-full min-h-40 resize-none outline-none rounded border bg-transparent text-dark-gray dark:text-gray-300 text-xs dark:border-gray-600"
        />
        <label
          className="absolute transition-all top-4 left-4 text-sm px-2 tracking-wide bg-white dark:bg-dark-black text-dark-gray dark:text-gray-300"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <span className="absolute top-4 right-4 text-xs tracking-wide text-dark-gray">A</span>
      </div>
    </>
  );
};

export default CustomTextarea;
