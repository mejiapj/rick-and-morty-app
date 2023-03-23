import React from 'react';
import styles from './About.module.css';
export default function About(props) {
  return (
    <div className={styles.container}>
      <h1>Bienvenidos a mi primer Single Page Application</h1>
      <p>
        En esta App utilice los conocimientos adquiridos en SoyHenry y San
        Google
      </p>
      <img
        src='https://cloudinary-res.cloudinary.com/image/upload/React-Native.png'
        alt='Not found'
      />
      <h3>Hola, mi nombre es Jorge Mejía</h3>
    </div>
  );
}
