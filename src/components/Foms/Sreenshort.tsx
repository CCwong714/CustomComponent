import React from 'react';
import { useForm } from '@mantine/form';

const Sreenshort = async () => {

  const form = useForm({
    initialValues: {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      fruits: [
        { name: 'Banana', available: true },
        { name: 'Orange', available: false },
      ],
      deeply: {
        nested: {
          object: [{ item: 1 }, { item: 2 }],
        },
      },
    },
  });
  // Props for input that is controlled by user object firstName field
  form.getInputProps('user.firstName');
  // Set value of `name` field that is contained in object at second position of fruits array:
  form.setFieldValue('fruits.1.name', 'Carrot');
  // Validate deeply nested field
  form.validateField('deeply.nested.object.0.item');
  // output : {hasError : true/false , errors : null}

  return <div>{isValid}</div>;
};

export default Sreenshort;
