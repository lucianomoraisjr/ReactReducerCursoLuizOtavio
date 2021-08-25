import React, { useEffect } from 'react';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';


export default function Alunos() {
  useEffect(()=>{
getData();
console.log("oi")
  },[])

  const getData = async () =>{
    const response = await  axios.get('/alunos')
    console.log(response)
  }

  return (
    <Container>
    <h1>Alunos</h1>
    </Container>
  );
}
