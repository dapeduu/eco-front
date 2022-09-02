import { useParams } from "react-router-dom"

export const SpecificDelivery = () => {
  const { id } = useParams()


  return (
    <div>SpecificDelivery {id}</div>
  )
}
