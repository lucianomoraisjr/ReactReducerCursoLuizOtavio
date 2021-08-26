import React, { useEffect, useState } from 'react';
import { Link, link } from 'react-router-dom';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicure } from './styled';
import {FaUserCircle, FaEdit,FaWindowClose}from'react-icons/fa'
import {get} from 'lodash'

export default function Alunos() {
  const [alunos, setAlunos]=useState([])
  
  useEffect(()=>{
  getData();
  
  },[])

  const getData = async () =>{
    const response = await  axios.get('/alunos')
    setAlunos(response.data)
    console.log("oioi")
  }

  return (
    <Container>

    <AlunoContainer>
 
     {alunos.map(aluno=>(
       <div key={String(aluno.id)}>
         <ProfilePicure>
         {get(aluno,'Fotos[0].url',false)?( 
             <img src={aluno.Fotos[0].url} alt=""></img> 
         ):(
          <FaUserCircle size = {36}/>
         )}
      </ProfilePicure>
      <span>{aluno.nome}</span>
      <span>{aluno.email}</span>
      
      <Link to={`/aluno/${aluno}/edit`}>
        <FaEdit size={16} />
         </Link>
         <Link to={`/aluno/${aluno}/delet`}>
        <FaWindowClose size={16} />
         </Link>
       </div>
     ))}
    </AlunoContainer>
    </Container>
  );
}
