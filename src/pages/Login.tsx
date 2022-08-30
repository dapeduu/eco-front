import { useNavigate } from 'react-router-dom';
import LoginImage from '../assets/login.svg'

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/menu')
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <main className="h-96 ">
        <form className="h-full flex flex-col gap-4 justify-between" onSubmit={handleLogin}>
          <div className="text-center px-">
            <img className='mx-auto' src={LoginImage} alt="Illustration of person holding a plant" />
            <h1 className="text-2xl font-light">E-CO</h1>
          </div>
          <div className="flex flex-col gap-4">
            <input className="input" id="cpf" required type="text" placeholder='Insira seu CPF' />
            <input className="input" id="password" required type="password" placeholder='Insira sua senha' />
          </div>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </main>
    </div>
  )
}
