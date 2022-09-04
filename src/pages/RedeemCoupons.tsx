import { CouponItem } from "../components/CouponItem"
import { EcoPoints } from "../components/EcoPoints"
import { NavbarLayout } from "../components/NavbarLayout"

export const RedeemCoupons = () => {
  return (
    <NavbarLayout withBackButton>
      <main className="container max-w-lg mx-auto">
        <h1 className="text-2xl text-center my-3">Cupons disponíveis</h1>
        <ul className="list-none flex flex-col gap-3">
          <li>
            <CouponItem title="Outback" description="1 Sobremesa Grátis" validUntil="20/12/2022" value={300} />
          </li>
          <li>
            <CouponItem title="Outback" description="1 Sobremesa Grátis" validUntil="20/12/2022" value={300} />
          </li>
        </ul>
      </main>
    </NavbarLayout>
  )
}
