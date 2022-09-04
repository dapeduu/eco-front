import { Link } from "react-router-dom"

type DeliveryItemProps = {
  name: string,
  situation: string,
  id: string
}

export const DeliveryItem = ({ name, situation, id }: DeliveryItemProps) => {

  return (
    <Link to={`/specific_delivery/${id}`}>
      <div className="flex shadow-card rounded-md p-3 justify-between">
        <div>
          <h2 className="text-xl"><b>{name}</b></h2>
          <p>Situação atual: {situation}</p>
        </div>
        <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Imagem do produto" className="w-28 h-28" />
      </div>
    </Link>
  )
}