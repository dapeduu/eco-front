import { NavbarLayout } from "../components/NavbarLayout"
import { Map as PigeonMap } from "pigeon-maps"

export const Map = () => {
  const center: [number, number] = [-15.79340, -47.88232] // Brasilia coords

  return (
    <NavbarLayout withBackButton>
      <PigeonMap center={center}>
      </PigeonMap>
    </NavbarLayout>
  )
}
