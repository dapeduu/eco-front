import { useEffect, useState } from "react"
import api from "../api"
import { DeliveryItem } from "../components/DeliveryItem"
import { NavbarLayout } from "../components/NavbarLayout"

export const DeliveryList = () => {
  const [deliveries, setDeliveries] = useState<{
    id: number,
    estado: 1|2,
    nome_usuario: string,
    cpf_usuario: string,
    ponto_coleta: string,
    endereco: string,
    descricao: string,
    nome_produto: string,
    categoria: string,
    pontuacao: number,
    img: string,
  }[]>([])

  useEffect(()=>{
    const id = sessionStorage.getItem("@eco/userId")
    api.get(`/delivery/many/${id}`)
    .then((res) => {
      setDeliveries(res.data)
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })
  },[])

  return (
    <NavbarLayout withBackButton>
      <main className="container mx-auto max-w-lg p-3 ">
        <h1 className="text-2xl text-center my-3">Minhas entregas</h1>
        <ul className="list-none flex flex-col gap-4">
          {deliveries.map((delivery)=>
            <li>
              <DeliveryItem key={delivery.id} id={delivery.id} estado={delivery.estado} nome_produto={delivery.nome_produto} img = {delivery.img} />
            </li>)}
        </ul>
      </main>
    </NavbarLayout>
  )
}




