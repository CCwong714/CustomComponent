// Switch.js
import React from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface SwitchProps<T extends FieldValues>
  extends React.ComponentProps<'input'> {
  register: UseFormRegister<T>;
  label: Path<T>;
  formProps?: RegisterOptions<T>;
}

const FormCheckBox = <T extends FieldValues>({
  label,
  register,
  formProps,
  ...props
}: SwitchProps<T>) => {
  // Create input props by spreading properties from register and original props
  // const inputProps = {
  //   ...register(label, formProps),
  //   ...props,
  // };

  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        id='toggle'
        {...register(label, { ...formProps })}
        {...props}
      />
    </div>
  );
};

export default FormCheckBox;
