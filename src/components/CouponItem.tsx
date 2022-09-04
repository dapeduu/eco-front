import { EcoPoints } from "./EcoPoints"

type CouponItemProps = {
  title: string,
  value: number,
  description: string,
  validUntil: string
}

export const CouponItem = ({ title, value, description, validUntil }: CouponItemProps) => {
  return (
    <div className="flex justify-between shadow-md p-2">
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-bold text-lg">{title} <EcoPoints value={value} /></h2>
        <p className="font-light">{description}</p>
        <span className="font-light text-sm">Válido até {validUntil}</span>
      </div>
      <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Logo" className="w-28 h-28" />
    </div>
  )
}
