import { NavbarLayout } from "../components/NavbarLayout"
import { Map as PigeonMap, Marker } from "pigeon-maps"
import { useEffect, useState } from "react"
import api from "../api"

export const Map = () => {
  const center: [number, number] = [-15.79340, -47.88232] // Brasilia coords

  const [markers, setMarkers] = useState<{
    id: number,
    nome: string,
    desricao: string,
    endereco: string,
    latitude: string,
    longitude: string
  }[]>([])

  useEffect(()=>{
    api.get("/pontos")
    .then((res) => {
      setMarkers(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })
  },[])

  return (
    <NavbarLayout withBackButton>
      <PigeonMap center={center}>
        {markers.map((marker)=>
          <Marker 
          width={50} 
          anchor={[parseFloat(marker.latitude), parseFloat(marker.longitude)]}
          color='green'
          onClick={() => window.open(marker.endereco, '_blank', 'noopener,noreferrer')} 
          />
        )}
        
      </PigeonMap>
    </NavbarLayout>
  )
}
