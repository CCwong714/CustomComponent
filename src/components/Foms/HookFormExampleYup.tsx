import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from '../Custom';
import Toast from '../Custom/Toast';

type TFormData = {
  username: string;
  password: string;
  email?: string;
  mobileNumber?: number;
};

enum ENaming {
  Login = 'Login',
  Register = 'Register',
  Email = 'Email',
  SuccessLogin = 'Success Login',
}

const HookFormExampleYup: React.FC = () => {
  // useState
  const [loginData, setLoginData] = useState<Array<TFormData>>([
    { username: 'User001', password: '123456yY', email: 'user001@example.com' },
  ]);

  const [step, setStep] = useState<string>(ENaming.Login);
  const [message, setMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  // yup
  const schema = yup
    .object({
      username: yup
        .string()
        .required('Please enter username.')
        .min(4, 'Username should be more than 4 characters'),
      password: yup
        .string()
        .required('Please enter password.')
        .min(8, 'Password should be more then 8 Characters.')
        .max(16, 'Password should be less then 16 Characters.')
        .matches(
          /[a-z]+/,
          'Password must have at least one Lowercase Character.'
        )
        .matches(
          /[A-Z]+/,
          'Password must have at least one Uppercase Character.'
        )
        .matches(/\d+/, 'Password must contain at least one Digit.'),
      // email:
      //   step === ENaming.Register
      //     ? yup.string().email().required('Please enter email.')
      //     : yup.string().nonNullable(),
      email: yup.string().nonNullable(),
      mobileNumber:
        step === ENaming.Register
          ? yup
              .number()
              .required('Please enter mobile number.')
              .min(10, 'Please insert correct mobile number.')
          : yup.number().nonNullable(),
    })
    .required();
    
  // form
  const {
    reset,
    control,
    register,
    handleSubmit,
    // clearErrors,
    getFieldState,

    // setValue,
    // getFieldState, //用于拿到value的 error,invalid,isDirty,isTouched Example: getFieldState('username')
    // watch, // 用于查看form的value, Example : watch("username")
    // trigger, // 用于检查是不是已经完成自己的validation Example ：const isValid = await trigger('username');
    setError,

    formState: { errors, touchedFields, dirtyFields },
  } = useForm<TFormData>({
    resolver: yupResolver<TFormData>(schema),
  });

  //       form value , new value
  // setValue('username', 'newName');
  // const { username, password } = watch

  // clearErrors();
  // clearErrors('username');

  const handleLogin = (data: TFormData) => {
    setMessage('Success to Login.');
    const checkingLogin = loginData.find(
      (login) =>
        login.username === data.username && login.password === data.password
    );

    if (checkingLogin) {
      setStep(ENaming.SuccessLogin);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
      reset();
    } else {
      setError('password', {
        type: 'manual',
        message: 'Invalid username or password.',
      });
      setError('username', {
        type: 'manual',
        message: 'Invalid username or password.',
      });
    }
  };

  const handleRegister = (data: TFormData) => {
    reset();
    setShowToast(true);
    setStep(ENaming.Login);
    setMessage('Success to Register.');
    setLoginData((pre) => [...pre, data]);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  // function form submit

  const onSubmit = handleSubmit((data) => {
    if (step === ENaming.Login) {
      handleLogin(data);
    } else if (step === ENaming.Register) {
      handleRegister(data);
    }
  });

  // const onSubmit: SubmitHandler<TFormData> = (data) => console.log(data);

  console.log(getFieldState('password').isTouched);
  return (
    <div className='flex h-[100vh] w-[100vw] flex-col items-center justify-center'>
      {showToast && (
        <Toast
          message={message}
          onClick={() => {
            setShowToast(false);
          }}
        />
      )}
      <p>** React hook form **</p>
      <form
        id='form'
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={onSubmit}
        className='flex w-[400px] flex-col rounded-md bg-gray-200 p-5'
      >
        {/* Login */}
        {step === ENaming.Login && (
          <>
            <p className='text-[24px] font-bold'>Login form</p>
            {/* user name */}
            <p>
              User name<span className='text-red-500'> *</span>
            </p>

            <input {...register('username')} />

            <span className='min-h-[25px] text-end text-[12px] font-light text-red-500'>
              {errors.username && errors.username?.message}
            </span>

            {/* password */}
            <p className='pt-2'>
              Password<span className='text-red-500'> *</span>
            </p>
            <input type='password' {...register('password')} />
            <span className='min-h-[25px] text-end text-[12px] font-light text-red-500'>
              {errors.password && errors.password?.message}
            </span>
          </>
        )}

        {/* Register */}
        {step === ENaming.Register && (
          <>
            <p className='text-[24px] font-bold'>Register form</p>
            {/* user name */}
            <p>
              User name<span className='text-red-500'> *</span>
            </p>
            <input {...register('username')} />
            <span className='min-h-[25px] text-end text-[12px] font-light text-red-500'>
              {errors.username && errors.username?.message}
            </span>

            {/* password */}
            <p className='pt-2'>
              Password<span className='text-red-500'> *</span>
            </p>
            <input type='password' {...register('password')} />
            <span className='min-h-[25px] text-end text-[12px] font-light text-red-500'>
              {errors.password && errors.password?.message}
            </span>

            {/* email */}
            <Controller
              name='email'
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <p className='pt-2'>
                    Email<span className='text-red-500'> *</span>
                  </p>
                  <input type='email' value={value} onChange={onChange} />
                  <span className='min-h-[25px] text-end text-[12px] font-light text-red-500'>
                    {errors.email?.message}
                  </span>
                </>
              )}
            />

            {/* mobile number */}
            <Controller
              name='mobileNumber'
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <p className='pt-2'>
                    MobileNumber<span className='text-red-500'> *</span>
                  </p>
                  <input
                    value={value}
                    maxLength={10}
                    // onChange={(e) => {
                    //   e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    //   setValue('mobileNum', e.target.value);
                    // }}
                    // onChange={(e) => {
                    //   e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    //   onChange(e.target.value);
                    // }}
                    onChange={(e) =>
                      onChange(e.target.value.replace(/[^0-9]/g, ''))
                    }
                  />
                  <span className='min-h-[25px] text-end text-[12px] font-light text-red-500'>
                    {errors.email?.message}
                  </span>
                </>
              )}
            />
          </>
        )}

        {/* Login Success */}
        {step === ENaming.SuccessLogin && (
          <div className='flex flex-col items-center'>
            <p className='text-[36px] font-bold'>Hello World !</p>
            <Button
              onClick={() => {
                setStep(ENaming.Login);
              }}
              className='mt-2 max-w-[400px] rounded-md bg-green-600 p-2 font-bold text-white hover:bg-green-500 active:bg-green-300'
            >
              Logout
            </Button>
          </div>
        )}
      </form>

      {/* button submit */}
      {(step === ENaming.Login || step === ENaming.Register) && (
        <>
          <Button
            form='form'
            type='submit'
            className='mt-2 max-w-[400px] rounded-md bg-green-600 p-2 font-bold text-white hover:bg-green-500 active:bg-green-300'
          >
            {step === ENaming.Login ? ENaming.Login : ENaming.Register}
          </Button>

          {/* change form (login / register) */}
          <div className='flex w-full max-w-[400px] items-end justify-end pt-2'>
            <Button
              className='w-fit text-end underline'
              onClick={() => {
                reset();
                if (step === ENaming.Login) {
                  return setStep(ENaming.Register);
                }
                return setStep(ENaming.Login);
              }}
            >
              {step === ENaming.Login ? ENaming.Register : ENaming.Login}
            </Button>
          </div>

          <p>isDirty : {dirtyFields['username'] ? 'true' : 'false'}</p>
          <p>isTouched : {touchedFields['username'] ? 'true' : 'false'}</p>
        </>
      )}
    </div>
  );
};

export default HookFormExampleYup;
