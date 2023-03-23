import styles from './Form.module.css';
//import { useEffect, useState } from "react";
import { useState } from 'react';
import { validate } from './validation';
export default function Form(props) {
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    // userName : Feli, password: ""
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpt4BdvCogIuJcY1VXeEaq19D5Pe4_y5K22m3_kLsGYWSQOcS6'
        alt='Not found'
      />
      <br />
      <label htmlFor=''>Nombre: </label>
      <input
        type='text'
        value={userData.userName}
        name='userName'
        onChange={handleChange}
        className={errors.userName && styles.warning}
      />
      {errors.userName ? (
        <p style={{ color: 'red' }}>{errors.userName}</p>
      ) : null}
      <label htmlFor=''>Password: </label>
      <div className={styles.pass}>
        <input
          type={shown ? 'text' : 'password'}
          value={userData.password}
          name='password'
          onChange={handleChange}
          className={errors.password && styles.warning}
        />
        <span> </span>
        <button type='button' onClick={switchShown}>
          {shown ? 'Ocultar' : 'Mostrar'}
        </button>

        {errors.password ? (
          <p style={{ color: 'red' }}>{errors.password}</p>
        ) : null}
        <br />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
}
