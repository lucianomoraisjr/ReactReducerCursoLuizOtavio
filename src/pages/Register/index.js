import React, { useState } from 'react';
import { FaPray } from 'react-icons/fa';
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux';
import {Form} from './styled'
import { Container } from '../../styles/GlobalStyles';
import { set } from 'lodash';
import axios from '../../services/axios';
import history from '../../services/history';
import { get } from 'lodash';



export default function Register() {
  const [nome, setNome]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]=useState("")

   async function  handleSubmit(e){
    e.preventDefault();
    let formErros = false; 

    if(nome.length<3 || nome.length>255){
      formErros = true
      toast.error('Erro Nome')
    }
    if(formErros) return;
    try{
      await axios.post('/users/',{
        nome,
        password,
        email
      })
      toast.success("Cadastro Realizado com sucesse")
      history.push('/')      
    } catch(e){
      const status = get(e,'response.status')
      const errors = get(e,'response.data.errors',[])
     errors.map(error => toast.error(error));

    }


  }


  return (
    <Container>
    <h1>Register</h1>
    <Form onSubmit ={handleSubmit}>
      <label htmlFor="nome" >
        Nome:
        <input type="text"value={nome} onChange={e =>setNome(e.target.value)} placeholder="Seu Nome" ></input>
        
      </label>
      <label htmlFor="email" >
        Email:
        <input type="text"value={email} onChange={e =>setEmail(e.target.value)} placeholder="Email..." ></input>
        
      </label>
      <label htmlFor="password" >
        Senha:
        <input type="password"value={password} onChange={e =>setPassword(e.target.value)} placeholder="Senha ..." ></input>
        
      </label>
      <button type = "submit">Criar minha conta</button>
    </Form>
    </Container>
  );
}
