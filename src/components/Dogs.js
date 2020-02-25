import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_DOGS } from '../queries';


export const Dogs = () => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const onDogSelected = () => {
    console.log('dog')
  }

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}