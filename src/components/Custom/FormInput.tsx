import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface FormInputProps<T extends FieldValues>
  extends React.ComponentProps<'input'> {
  register: UseFormRegister<T>;
  name: Path<T>;
}

const FormInput = <T extends FieldValues>({
  register,
  name,
  ...props
}: FormInputProps<T>) => {
  return <input {...register(name)} {...props} />;
};

export { FormInput };

// Example 
// <FormInput register={register} name='userName' />
