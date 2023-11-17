import React from 'react';
import { useForm } from 'react-hook-form';

type TFormData = {
  username: string;
  password: string;
};

const HookFormExample: React.FC = () => {
  // useState
  const isRequired = true;

  // form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TFormData>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // const { username, password } = watch;

  const validateMobileNumber = (value: string) => {
    // Trim leading and trailing spaces
    const trimmedValue = value.trim();
    // Check if strict validation is enabled
    if (trimmedValue !== value) {
      setValue('username', trimmedValue, { shouldValidate: true });
      return 'Mobile number cannot include leading and trailing spaces.';
    }
    return true; // Return true if validation passes
  };

  // function form submit
  const onSubmit = handleSubmit((data) => console.log(data));
  // const onSubmit = (data: TFormData) => console.log(data);

  return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw]'>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={onSubmit}
        className='flex flex-col p-5 w-[300px] bg-gray-200'
      >
        <p className='text-[24px]'>Login form</p>
        {/* user name */}
        <label>
          User name<span className='text-red-500'> *</span>
        </label>
        <input
          {...register('username', {
            required: isRequired ? 'User name is required.' : false,
            maxLength: 15,
            pattern: { value: /[a-z]+/, message: '' },
            validate: validateMobileNumber,
            onChange: (e) => {
              console.log(e);
            },
          })}
        />
        <span className='text-red-500 text-[12px] min-h-[25px]'>
          {errors.username?.message}
        </span>

        {/* password */}
        <label className='pt-2'>
          Password <span className='text-red-500'> *</span>
        </label>

        <input type='password' {...register('password', { required: true })} />
        <input
          type='password'
          {...register('password', { required: 'Password is required.' })}
        />

        <span className='text-red-500 text-[12px] min-h-[25px]'>
          {errors.password?.message}
        </span>

        {/* button submit */}
        <button type='submit' className='pt-2'>
          Login
        </button>
      </form>
    </div>
  );
};

export default HookFormExample;
