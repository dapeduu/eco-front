import { useNavigate } from 'react-router-dom';
import LoginImage from '../assets/login.svg'
import api from '../api';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();

  const [cpf, setCPF] = useState("")

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    api.post("user",{
      cpf: "00000000000"//cpf
    }
    )
    .then((res)=>{
      sessionStorage.setItem("@eco/userId", res.data.id)
      navigate('/menu')
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })
  }

  return (
    <div className="full-page-container">
      <div className="center">
        <main className="h-96 ">
          <form className="h-full flex flex-col gap-4 justify-between" onSubmit={handleLogin}>
            <div className="text-center px-">
              <img className='mx-auto' src={LoginImage} alt="Illustration of person holding a plant" />
              <h1 className="text-2xl font-light">E-CO</h1>
            </div>
            <div className="flex flex-col gap-4">
              <input value={cpf} onChange={(event) => setCPF(event.target.value)} className="input" id="cpf" required type="text" placeholder='Insira seu CPF' />
              <input className="input" id="password" required type="password" placeholder='Insira sua senha' />
            </div>
            <button className="btn-primary" type="submit">Entrar</button>
          </form>
        </main>
      </div>
    </div>
  )
}
