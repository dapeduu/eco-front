import { NavbarLayout } from "../components/NavbarLayout"
import { Map as PigeonMap } from "pigeon-maps"

export const Map = () => {
  return (
    <NavbarLayout withBackButton>
      <PigeonMap center={[-15.79340, -47.88232]}>
      </PigeonMap>
    </NavbarLayout>
  )
}
