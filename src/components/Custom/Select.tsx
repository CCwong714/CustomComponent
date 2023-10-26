import React from 'react';

type OptionType = {
  [key: string]: string | number; // Adjust the type as per your options' structure
};

interface SelectProps extends React.ComponentProps<'select'> {
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
const FormSelect: React.FC<SelectProps> = ({
  options,
  key,
  labelKey,
  valueKey,
  optionProps,
  ...props
}) => {
  return (
    <select {...props}>
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
// 	options={[{ id: 1, value: 'a', label: 'abc' }]}
// 	key='id' 	//options object key
// 	valueKey='value'	//options object key
// 	labelKey='label'	//options object key
//  optionProps={{ disabled: true }}
// />;
