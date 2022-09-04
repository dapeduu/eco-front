import EcoLogo from '../assets/eco-points.svg'

type EcoPointsProps = {
  value?: number
}

/**
 * If a value is provided, the component will render with the provided value.
 * If not, it will show the user E-CO points.
 */
export const EcoPoints = ({ value }: EcoPointsProps) => {
  if (value) return (
    <span>
      <img className="inline-block mr-1" src={EcoLogo} alt="Símbolo dos Eco points. É ícone de folha de árvore." />
      {value}
    </span>
  )

  const userEcoPoints = 3000 // TODO: get it from the global state

  return (
    <span>
      <img className="inline-block mr-1" src={EcoLogo} alt="Símbolo dos Eco points. É ícone de folha de árvore." />
      {userEcoPoints}
    </span>
  )
}
