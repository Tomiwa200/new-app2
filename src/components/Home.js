import React from 'react';
import houseIcon from './house.jpeg';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className='mx-auto mt-4'>
      <img 
      src={houseIcon}
      alt='House Icon'
      
      />
      
      <p className='home'>This is the Homepage</p>
      </Container>
    
     
  )
}

export default Home