import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface FormInputProps<T extends FieldValues>
  extends React.ComponentProps<'input'> {
  register: UseFormRegister<T>;
  name: Path<T>;
}

const CustomFormInput = <T extends FieldValues>({
  register,
  name,
  ...props
}: FormInputProps<T>) => {
  return <input {...register(name)} {...props} />;
};

export { CustomFormInput };

// Example 
// <CustomFormInput register={register} name='userName' />
