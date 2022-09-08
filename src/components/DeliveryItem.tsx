import { Link } from "react-router-dom"

type DeliveryItemProps = {
  id: number,
  estado: 1|2,
  nome_produto: string,
  img: string,
}

export const DeliveryItem = ({
    id, 
    estado,
    nome_produto,
    img,
  }: DeliveryItemProps) => {

  const legenda = {
    1: "Pendente",
    2: "Confirmado",
  }

  return (
    <Link to={`/specific_delivery/${id}`}>
      <div className="flex shadow-card rounded-md p-3 justify-between">
        <div>
          <h2 className="text-xl"><b>{nome_produto}</b></h2>
          <p>Situação atual: <b>{legenda[estado]}</b></p>
        </div>
        <img src={img} alt="Imagem do produto" className="w-28 h-28" />
      </div>
    </Link>
  )
}