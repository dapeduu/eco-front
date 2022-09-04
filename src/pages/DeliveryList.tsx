import { DeliveryItem } from "../components/DeliveryItem"
import { NavbarLayout } from "../components/NavbarLayout"

export const DeliveryList = () => {
  return (
    <NavbarLayout withBackButton>
      <main className="container mx-auto max-w-lg p-3 ">
        <h1 className="text-2xl text-center my-3">Minhas entregas</h1>
        <ul className="list-none flex flex-col gap-4">
          <li>
            <DeliveryItem name="Bateria" situation="Em transito" id="123412" />
          </li>
          <li>
            <DeliveryItem name="Bateria" situation="Em transito" id="123412" />
          </li>
        </ul>
      </main>
    </NavbarLayout>
  )
}




