import React from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface FormInputProps<T extends FieldValues>
  extends React.ComponentProps<'input'> {
  register: UseFormRegister<T>;
  label: Path<T>;
  formProps?: RegisterOptions<T>;
}

const FormInput = <T extends FieldValues>({
  label,
  register,
  formProps,
  ...props
}: FormInputProps<T>) => {
  return <input {...register(label, { ...formProps })} {...props} />;
};

export { FormInput };

// Example
// <FormInput
//  register={register}
//  label='firstName'
//  formProps={{ required: true, onChange: () => {} }}
// />

// <FormInput<T>
//  register={register}
//  label='firstName'
//  formProps={{ required: true, onChange: () => {} }}
// />
