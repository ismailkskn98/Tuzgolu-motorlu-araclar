import { FC } from 'react';
import { useField } from 'formik';

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
      <div className="relative col-span-2">
        <textarea
          {...field}
          {...props}
          className="px-2 py-2 rounded-sm w-full min-h-40 resize-none border bg-transparent dark:bg-dark-gray dark:border-gray-600"
        />
        <label className="absolute top-4 left-4 text-xs tracking-wide text-dark-gray dark:text-gray-300" htmlFor={props.id}>
          {props.label}
        </label>
        <span className="absolute top-4 right-4 text-xs tracking-wide text-dark-gray">A</span>
      </div>
    </>
  );
};

export default CustomTextarea;
