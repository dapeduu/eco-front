import { useNavigate } from "react-router-dom";
import EcoLogo from '../assets/eco-points.svg'

type NavbarProps = {
  showBackButton?: boolean
}

export const Navbar = ({ showBackButton }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-screen h-24 bg-primary-darker text-white">
      <div className="h-full container flex justify-evenly items-center px-4 max-w-lg mx-auto">
        <div className="flex-1">
          {showBackButton ? <button className="text-2xl" onClick={() => navigate(-1)}>←</button> : <div />}
        </div>
        <h1 className="text-3xl">E-CO</h1>
        <div className="flex-1 text-right text-lg font-medium">
          <span>
            <img className="inline-block mr-1" src={EcoLogo} alt="Símbolo dos Eco points. É ícone de folha de árvore." />
            3000
          </span>
        </div>
      </div>
    </header>
  )
}
