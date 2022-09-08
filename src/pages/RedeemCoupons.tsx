import { useEffect, useState } from "react"
import api from "../api"
import { CouponItem } from "../components/CouponItem"
import { NavbarLayout } from "../components/NavbarLayout"

export const RedeemCoupons = () => {
  const [coupouns, setCoupouns] = useState<
  {
    id: number,
    nome: string,
    empresa: string,
    descricao: string,
    custo: number,
    data_validade: string
    img: string
  }[]
  >([])

  useEffect(() => {
    api.get("/get_cupons")
    .then((res) => {
      setCoupouns(res.data)
    })
    .catch((err) => {
      alert(err)
      console.error(err)
    })
  }, [])
  return (
    <NavbarLayout withBackButton>
      <main className="container max-w-lg mx-auto px-3">
        <h1 className="text-2xl text-center my-3">Cupons disponíveis</h1>
        <ul className="list-none flex flex-col gap-3">
          {coupouns.map((coupon)=>
          <li>
            <CouponItem  id={coupon.id.toString()} key={coupon.id} title={coupon.nome} description={coupon.descricao} validUntil={coupon.data_validade} value={coupon.custo} imgUrl={coupon.img} />
          </li>
          )}
        </ul>
      </main>
    </NavbarLayout>
  )
}
