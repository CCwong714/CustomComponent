import { SubmitHandler, useForm } from 'react-hook-form';
import { style } from './ReactHookForm';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function ApplyValidation() {
  const { watch, register, handleSubmit, setValue } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const { firstName, age } = watch();
  console.log(firstName);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
      <label>First Name :</label>
      <input
        {...register('firstName', { required: true, maxLength: 20 })}
        className={style}
      />
      <label>Last Name :</label>
      <input
        {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
        className={style}
      />
      <label>Age :</label>
      <input
        type='number'
        {...register('age', {
          min: 18,
          max: 99,
          onChange: () => {
            if (age < 0) {
              setValue('age', 0);
            }
          },
          onBlur: () => {
            if (age < 0) {
              setValue('age', 0);
            }
          },
        })}
        className={style}
      />

      <input type='submit' />
    </form>
  );
}
