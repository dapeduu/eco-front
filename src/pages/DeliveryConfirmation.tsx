import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import { DeliveryInfo } from "../components/DeliveryInfo";
import { NavbarLayout } from "../components/NavbarLayout";

export const DeliveryConfirmation = () => {
  const {id} = useParams()

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
  const [user, setUser] = useState<{
    id: number,
    email: string,
    cpf: string,
    nome: string
    ecopoints: number
  }>()

  useEffect(()=>{
    api.get(`delivery/${id}`)
    .then((res)=>{
      setDelivery(res.data)
      if(res.data.estado != 1){
        alert("Essa entrega já foi confirmada")
        navigate('/menu')
      }
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })

    const userId = sessionStorage.getItem("@eco/userId")
    api.get(`user/${userId}`)
    .then((res) => setUser(res.data))
    .catch((err) => {
      alert(err)
      console.error(err)
    })

  },[])
  const navigate = useNavigate();

  const handleConfirmDelivery = () => {
    // Confirm router
    api.post(`/delivery/confirm/${id}`,{
      user_id: sessionStorage.getItem("@eco/userId")
    })
    .then((res)=>{
      console.log(res)
      alert("Entrega confirmada")
      navigate('/delivery_list')
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })
    
  }
  if(!delivery) return <></>
  if(!user) return <></>

  return (
    <NavbarLayout withBackButton>
      <main className="flex-1 px-3 py-4 flex flex-col justify-between container max-w-lg mx-auto">
        <h1 className="text-xl font-medium text-center">Informações da Entrega</h1>
        <DeliveryInfo address={delivery.ponto_coleta} category={delivery.categoria} clientName={user.nome} clientCpf={user.cpf} deliveryCode={id || ""} deliveryPoint={delivery.ponto_coleta} productName={delivery.nome_produto} status={delivery.estado} points={delivery.pontuacao} img={delivery.img}/>
        <button onClick={handleConfirmDelivery} className="btn-primary">Confirmar entrega</button>
      </main>
    </NavbarLayout>
  )
}
