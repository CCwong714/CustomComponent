import { SubmitHandler, useForm } from 'react-hook-form';

enum GenderEnum {
  'male or',
  female,
  other,
}

interface Inputs {
  username: string;
  password: string;
  gender: GenderEnum;
}

console.log(GenderEnum);

export const style = 'border-solid border-2 px-1 py-2';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { username: 'test123', password: '' },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('gender')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      {/* username */}
      <div className='flex flex-col'>
        <label>Username :</label>
        <input {...register('username')} className={style} />
        <p className='min-h-[20px]'>{errors.password?.message}</p>
      </div>

      {/* password */}
      <div className='flex flex-col'>
        <label>Password :</label>
        <input
          {...register('password', { required: 'This field is reqiored' })}
          className={style}
        />
        <p className='min-h-[20px]'>{errors.password?.message}</p>
      </div>

      {/* select */}
      <label>Gender :</label>
      <select {...register('gender')} className={style}>
        <option value='male'>male</option>
        <option value='female'>female</option>
        <option value='other'>other</option>
      </select>

      <button type='submit'>submit</button>
    </form>
  );
};

export default ReactHookForm;
