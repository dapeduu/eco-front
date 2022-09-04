import EcoLogo from '../assets/eco-points.svg'

export const EcoPoints = () => {
  const ecoPoints = 3000 // TODO: Get it from the global state

  return (
    <span>
      <img className="inline-block mr-1" src={EcoLogo} alt="Símbolo dos Eco points. É ícone de folha de árvore." />
      {ecoPoints}
    </span>
  )
}
