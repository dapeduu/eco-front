import api from "../api"
import { EcoPoints } from "./EcoPoints"
import { ModalWrapper } from "./ModalWrapper"
import { useNavigate } from 'react-router-dom';


type CouponItemProps = {
  id: string,
  title: string,
  value: number,
  description: string,
  validUntil: string,
  imgUrl: string,
}
const standardUrl = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"

export const CouponItem = ({ id, title, value, description, validUntil, imgUrl }: CouponItemProps) => {
  const navigate = useNavigate();
  
  validUntil = (new Date(validUntil)).toDateString()

  const redeemCoupon = () => {
    api.post(`/redeem/${id}`, {
      user_id: sessionStorage.getItem("@eco/userId")
    })
    .then((res)=>{
      alert("Cupom coletado")
      navigate('/menu')
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })

  }

  return (
    <ModalWrapper content={(
      <div className="p-3 flex flex-col h-full">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <img src={imgUrl} alt="Logo" className="w-28 h-28" />
        </div>
        <div className="my-3">
          <p>
            {description}
          </p>
        </div>
        <div>
          <span className="text-sm font-light">
            Valido até {validUntil}
          </span>
        </div>
        <hr className="my-2" />
        <p>Você vai gastar <span className="text-green-500">{value} E-CO</span> points resgatando esse cupom</p>
        <button className="btn-primary mt-2" onClick={redeemCoupon}>Resgatar Cupom</button>
      </div>
    )}>
      <div className="flex justify-between rounded-md p-2 shadow-card text-left">
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="font-bold text-lg">{title} <EcoPoints value={value} /></h2>
          <p className="font-light">{description}</p>
          <span className="font-light text-sm">Válido até {validUntil}</span>
        </div>
        <img src={imgUrl} alt="Logo" className="w-28 h-28" />
      </div>
    </ModalWrapper>
  )
}
