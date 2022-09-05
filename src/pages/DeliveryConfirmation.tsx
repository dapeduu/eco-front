import { useNavigate } from "react-router-dom";
import { DeliveryInfo } from "../components/DeliveryInfo";
import { NavbarLayout } from "../components/NavbarLayout";

export const DeliveryConfirmation = () => {
  const navigate = useNavigate();

  const handleConfirmDelivery = () => {
    // Confirm router
    navigate('/delivery_list')
  }

  return (
    <NavbarLayout withBackButton>
      <main className="flex-1 px-3 py-4 flex flex-col justify-between container max-w-lg mx-auto">
        <h1 className="text-xl font-medium text-center">Informações da Entrega</h1>
        <DeliveryInfo address="Rua alou" category="Baterias" clientName="Jose" deliveryCode={"123jasjdlk"} deliveryPoint="Rua olá" productName="Lalalala" />
        <button onClick={handleConfirmDelivery} className="btn-primary">Confirmar entrega</button>
      </main>
    </NavbarLayout>
  )
}
