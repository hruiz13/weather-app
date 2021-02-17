import React from 'react';


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }

  return errors;
};

export default function Form() {
  const [errors, setErrors] = React.useState({});
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  const { username, password } = input;

  const handleChange = (e) => {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value
    }
    setErrors(validate(newInput));
    setInput(newInput)
  }

  return (
    <form onSubmit={(e) => { e.preventDefault() }}>
      <div>
        <label>Username:</label>
        <input className={`${errors.username && 'danger'}`} type="text" name="username" value={username} onChange={handleChange} />
        {errors.username && (
          <p className="danger">{errors.username}</p>
        )}
        <label>Password:</label>
        <input className={`${errors.password && 'danger'}`} type="password" name="password" value={password} onChange={handleChange} />
        {errors.password && (
          <p className="danger">{errors.password}</p>
        )}
        <button>Submit</button>
      </div>
    </form>
  )
}
