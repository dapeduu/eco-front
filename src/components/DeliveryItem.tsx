type DeliveryItemProps = {
  name: string,
  situation: string,
}

export const DeliveryItem = ({ name, situation }: DeliveryItemProps) => {
  return (
    <div className="flex shadow-lg rounded-md p-3 justify-between">
      <div>
        <h2 className="text-xl"><b>{name}</b></h2>
        <p>Situação atual: {situation}</p>
      </div>
      <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Imagem do produto" className="w-28 h-28" />
    </div>
  )
}