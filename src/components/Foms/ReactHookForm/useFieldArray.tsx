import React, { Fragment } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { Accordions, Button } from '../../Custom';

interface IItemsData {
  name: string;
  active: boolean;
  key: number;
}

interface IFormData {
  employees: Array<IItemsData>;
}

const ArrayFieldExample: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      employees: [
        {
          name: 'John',
          active: false,
          key: Math.floor(Math.random() * 10000000),
        },
        {
          name: 'Ryo',
          active: false,
          key: Math.floor(Math.random() * 10000000),
        },
      ],
    },
  });

  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'employees',
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };
  // const employees = useWatch({
  //   control,
  //   name: 'employees',
  // });
  // console.log(employees);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col max-w-[500px] mx-auto'
    >
      <div className='flex flex-row '>
        <p className='w-[300px]'>Name</p>
        <p className='w-[]'>status</p>
      </div>
      <ul className='flex flex-col gap-2 mt-10'>
        {fields.map((item, index) => (
          <Fragment key={item.id}>
            <li key={item.id} className='flex flex-row gap-2'>
              <input
                type='text'
                defaultValue={item.name}
                {...register(`employees.${index}.name` as const, {
                  required: `input ${index} is required **`,
                })}
                className='border-solid border-2 rounded-md px-1 w-[300px]'
              />

              <div className='flex flex-row w-[100px] gap-2'>
                <input
                  type='checkbox'
                  id='toggle'
                  {...register(`employees.${index}.active`)}
                  className='w-auto items-start'
                />
                <p>
                  {watch(`employees.${index}.active`) ? 'Active' : 'Unactive'}
                </p>
              </div>

              <button type='button' onClick={() => remove(index)}>
                Remove
              </button>
            </li>
            <p>{errors.employees?.[index]?.name?.message}</p>
          </Fragment>
        ))}
      </ul>
      <div className='flex flex-row gap-5'>
        <Button
          type='button'
          className='text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-300 rounded-md w-fit p-2 mt-2'
          onClick={() => {
            // .push
            append({
              name: '',
              active: false,
              key: Math.floor(Math.random() * 10000000000),
            });
            // .unshift
            // prepend({
            //   name: '',
            //   active: false,
            //   key: Math.floor(Math.random() * 10000000000),
            // });
          }}
        >
          Add Item
        </Button>
        <Button
          type='submit'
          className='text-white bg-green-600 hover:bg-green-500 active:bg-green-300 rounded-md w-fit p-2 mt-2'
        >
          Submit
        </Button>
      </div>
      <code className='bg-gray-300 rounded-xl p-6 max-w-[500px] mt-5'>
        {JSON.stringify(getValues())}
      </code>
      <Accordions title='123' className=''>
        {/* <p>123</p> */}
      </Accordions>
    </form>
  );
};

export default ArrayFieldExample;
