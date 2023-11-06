import React from 'react';
import houseIcon from './house.jpeg';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className='mt-4 mx-auto'>
      <img 
      src={houseIcon}
      alt='House Icon'
      className='w-50'
      />
      
      <p className='home'>This is the Homepage</p>
      </Container>
    
     
  )
}

export default Home