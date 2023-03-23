import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Detail.css';

export default function Detail(props) {
  const navigate = useNavigate();
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        data.name ? setCharacter(data) : alert('No hay personajes con ese ID');
      })
      .catch((err) => {
        console.log(err);
        alert('Ups! Algo estuvo mal');
      });
    return () => setCharacter({});
  }, [detailId]);

  return (
    /*     <div className={styles.container}>
      <button onClick={() => navigate(-1)}>Regresar</button>
      <div className={styles.containerInfo}>
        <div>
          <h1>Name: {character.name}</h1>
          <h1>Status: {character.status}</h1>
          <h1>Gender: {character.gender}</h1>
          <h1>Specie: {character.species}</h1>
          <h1>Status: {character.status}</h1>
          <h1>Origin: {character.origin?.name}</h1>
          <h1>Location: {character.location?.name}</h1>
        </div>
        <img src={character.image} alt="" />
      </div>
    </div> */
    <div className='Character-detail'>
      <div className='Character-content'>
        <button className='Character-close' onClick={() => navigate(-1)}>
          X
        </button>
        <picture className='Character-avatar'>
          <img src={character.image} alt={character.name}></img>
        </picture>
        <div className='Character-information'>
          <div className='Character-information-content'>
            <h2>{character.name}</h2>
            <p>
              <b>Estado:</b> {character.status}
            </p>
            <p>
              <b>Especie:</b> {character.species}
            </p>
            <p>
              <b>Género:</b> {character.gender}
            </p>
            <p>
              <b>Origen:</b> {character.origin?.name}
            </p>
            <p>
              <b>Ubicación:</b> {character.location?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
