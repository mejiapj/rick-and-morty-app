import { useState } from 'react';
import './styles.css';

export default function SearchBar(props) {
  const [input, setInput] = useState('');

  const inputOnchangeHandler = (evento) => setInput(evento.target.value);

  const buttonOnsubmitHandler = (evento) => {
    evento.preventDefault();
    /*
    alert(`Creada tarea nueva`);
*/
    // console.log(props);
    props.onSearch(input);
    setInput('');
  };

  return (
    <form onSubmit={buttonOnsubmitHandler}>
      <input
        type='text'
        value={input}
        className='task-input'
        placeholder='¿Id a añadir?'
        onChange={inputOnchangeHandler}
      />

      <button>Añadir tarea</button>
    </form>
  );
}
