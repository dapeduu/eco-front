import { EcoPoints } from "./EcoPoints"
import { ModalWrapper } from "./ModalWrapper"

type CouponItemProps = {
  title: string,
  value: number,
  description: string,
  validUntil: string
}

export const CouponItem = ({ title, value, description, validUntil }: CouponItemProps) => {
  return (
    <ModalWrapper content={(
      <div className="p-3 flex flex-col h-full">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Logo" className="w-28 h-28" />
        </div>
        <div className="my-3">
          <p>
            1 Sobremesa Gratuita. Válido para  sobremesas de até R$ 30,00
          </p>
        </div>
        <div>
          <span className="text-sm font-light">
            Valido até {validUntil}
          </span>
        </div>
        <hr className="my-2" />
        <p>Você vai gastar <span className="text-green-500">132 E-CO</span> points resgatando esse cupom</p>
        <button className="btn-primary mt-2">Resgatar Cupom</button>
      </div>
    )}>
      <div className="flex justify-between rounded-md p-2 shadow-card text-left">
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="font-bold text-lg">{title} <EcoPoints value={value} /></h2>
          <p className="font-light">{description}</p>
          <span className="font-light text-sm">Válido até {validUntil}</span>
        </div>
        <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Logo" className="w-28 h-28" />
      </div>
    </ModalWrapper>
  )
}
