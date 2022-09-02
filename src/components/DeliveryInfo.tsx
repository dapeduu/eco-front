type DeliveryInfoProps = {
  deliveryCode: string,
  clientName: string,
  productName: string,
  category: string,
  deliveryPoint: string,
  address: string
}

export const DeliveryInfo = ({
  deliveryCode,
  clientName,
  productName,
  category,
  deliveryPoint,
  address }: DeliveryInfoProps) => {

  return (
    <div className="flex flex-col gap-2">
      <p>Código da entrega: <b>{deliveryCode}</b></p>
      <p>Nome do beneficiário: <b>{clientName}</b></p>
      <p>Nome do produto: <b>{productName}</b></p>
      <p>Categoria: <b>{category}</b></p>
      <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Imagem enviada por você" className="border-2 border-black" />
      <p>Ponto de entrega: <b>{deliveryPoint}</b></p>
      <p>Endereço: <b>{address}</b></p>
    </div>
  )
}