import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../api"
import { DeliveryInfo } from "../components/DeliveryInfo"
import { NavbarLayout } from "../components/NavbarLayout"

export const SpecificDelivery = () => {
  const { id } = useParams()
  const [delivery, setDelivery] = useState<{
    id: number,
    estado: string,
    nome_usuario: string,
    cpf_usuario: string,
    ponto_coleta: string,
    endereco: string,
    descricao: string,
    nome_produto: string,
    categoria: 1|2,
    pontuacao: number,
    img: string,
  }>()

  useEffect(()=>{
    api.get(`delivery/${id}`)
    .then((res)=>{
      setDelivery(res.data)
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })

  },[])
  if(!delivery) return <></>

  return (
    <NavbarLayout withBackButton>
      <main className="flex flex-col container max-w-lg mx-auto px-3">
        <h1 className="font-light text-2xl text-center my-3">Informações da entrega</h1>
        <DeliveryInfo address={delivery.ponto_coleta} category={delivery.categoria} clientName={delivery.nome_usuario} clientCpf={delivery.cpf_usuario} deliveryCode={id || ""} deliveryPoint={delivery.ponto_coleta} productName={delivery.nome_produto} status={delivery.estado} points={delivery.pontuacao} img={delivery.img}/>
      </main>
    </NavbarLayout>
  )
}
