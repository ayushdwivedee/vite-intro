import React, { useRef, useState } from 'react';

const DynamicForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const validateName = () => {
    if (nameRef.current.value.length < 3) {
      setNameError('Name must be at least 3 characters long');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailRef.current.value)) {
      setEmailError('Invalid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    if (passwordRef.current.value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      console.log('Form Submitted', formData);
      // Perform custom processing or submit to server
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" ref={nameRef} onBlur={validateName} />
        {nameError && <span>{nameError}</span>}
        <button type="button" onClick={() => handleFocus(nameRef)}>Focus Name</button>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" ref={emailRef} onBlur={validateEmail} />
        {emailError && <span>{emailError}</span>}
        <button type="button" onClick={() => handleFocus(emailRef)}>Focus Email</button>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" ref={passwordRef} onBlur={validatePassword} />
        {passwordError && <span>{passwordError}</span>}
        <button type="button" onClick={() => handleFocus(passwordRef)}>Focus Password</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
