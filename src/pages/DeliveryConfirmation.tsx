import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar"

export const DeliveryConfirmation = () => {
  const navigate = useNavigate();

  const handleConfirmDelivery = () => {
    // Confirm router
    navigate('/delivery_list')
  }

  return (
    <div className="full-page-container flex flex-col">
      <Navbar showBackButton />
      <main className="flex-1 px-4 py-4 flex flex-col justify-between">
        <h1 className="text-xl font-medium text-center">Informações da Entrega</h1>
        <div className="flex flex-col gap-2">
          <p>Código da entrega: <b>asdlhjaslkdj</b></p>
          <p>Nome do beneficiário: <b>fulano</b></p>
          <p>Nome do produto: <b>nova tekpix</b></p>
          <p>Categoria: <b>Bateria</b></p>
          <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Imagem da Bateria enviada por você" className="border-2 border-black" />
          <p>Ponto de entrega: <b>Escola classe</b></p>
          <p>Endereço: <b>Rua São Jorge</b></p>
        </div>
        <button onClick={handleConfirmDelivery} className="btn-primary">Confirmar entrega</button>
      </main>
    </div>
  )
}
