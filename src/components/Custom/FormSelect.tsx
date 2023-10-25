import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type OptionType = {
  [key: string]: string | number; // Adjust the type as per your options' structure
};

interface SelectProps<T extends FieldValues>
  extends React.ComponentProps<'select'> {
  register: UseFormRegister<T>;
  name: Path<T>;
  options: OptionType[];
  key: keyof OptionType;
  labelKey: keyof OptionType;
  valueKey: keyof OptionType;
  optionProps?: React.HTMLProps<HTMLOptionElement>;
}
const defaultProps = {
  optionProps: {},
};

//! 如果添加onChange {...register("")} 将会失效
const FormSelect = <T extends FieldValues>({
  register,
  name,
  options,
  key,
  labelKey,
  valueKey,
  optionProps,
  ...props
}: SelectProps<T>) => {
  return (
    <select {...register(name)} {...props}>
      {options.map((items) => (
        <option key={items[key]} value={items[valueKey]} {...optionProps}>
          {items[labelKey]}
        </option>
      ))}
    </select>
  );
};

export { FormSelect };

FormSelect.defaultProps = defaultProps;

// Example 1 :

// <FormSelect
// 	register={register}
// 	name='username'
// 	options={[{ id: 1, value: 'a', label: 'abc' }]}
// 	key='id' 	//options object key
// 	valueKey='value'	//options object key
// 	labelKey='label'	//options object key
//  optionProps={{ disabled: true }}
// />;
