import { useState } from 'react';

const [state, setState] = useState({ username: '', password: '' });
const handleInputChange = (event: {
  target: { name: string; value: string | number };
}) => {
  const { name, value } = event.target;
  setState((prevProps) => ({
    ...prevProps,
    [name]: value,
  }));
};
<input name='username' onChange={handleInputChange} />;
<input name='password' onChange={handleInputChange} />;

console.log(state);
