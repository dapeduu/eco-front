type DeliveryInfoProps = {
  deliveryCode: string,
  clientName: string,
  clientCpf: string,
  productName: string,
  category: 1|2,
  deliveryPoint: string,
  address: string,
  status?: string,
  points?: number
  img: string
}

export const DeliveryInfo = ({
  deliveryCode,
  clientName,
  clientCpf,
  productName,
  category,
  deliveryPoint,
  address,
  status,
  points, 
  img,
  }: DeliveryInfoProps) => {
  const legenda = {
    1: "Pendente",
    2: "Confirmado",
  }
  return (
    <div className="flex flex-col gap-2">
      <p>Código da entrega: <b>{deliveryCode}</b></p>
      {status && (
        <div>
          <p>Situação atual: <b>{legenda[status]}</b></p>
          {points && (
            <span className="font-light text-sm">Você ganhou
              <span className="text-green-400"><b> {points || 0} E-CO points </b></span>
              com essa entrega!  🎉</span>
          )}
        </div>
      )}
      <p>Nome do beneficiário: <b>{clientName}</b></p>
      <p>Cpf do beneficiário: <b>{clientCpf}</b></p>
      <p>Nome do produto: <b>{productName}</b></p>
      <p>Categoria: <b>{category}</b></p>
      <img src={img} alt="Imagem enviada por você" className="border-2 border-black object-contain h-60 w-96" />
      <p>Ponto de entrega: <b>{deliveryPoint}</b></p>
      <p>Endereço: <b>{address}</b></p>
    </div>
  )
}