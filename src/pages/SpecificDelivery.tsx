import { useParams } from "react-router-dom"
import { DeliveryInfo } from "../components/DeliveryInfo"
import { NavbarLayout } from "../components/NavbarLayout"

export const SpecificDelivery = () => {
  const { id } = useParams()


  return (
    <NavbarLayout withBackButton>
      <main className="flex flex-col container max-w-lg mx-auto px-3">
        <h1 className="font-light text-2xl text-center my-3">Informações da entrega</h1>
        <DeliveryInfo address="Rua São Jorge" category="Bateria" clientName="Fulano" deliveryCode={id || ""} deliveryPoint="Rua bonita" productName="Teste" status="Finalizada" points={300} />
      </main>
    </NavbarLayout>
  )
}
