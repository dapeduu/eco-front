import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <div className="full-page-container">
      <main className="flex flex-col w-full gap-5 max-w-lg px-4">
        <Link to="/map" className="btn-primary">Ver pontos de coleta</Link>
        <Link to="/qr_code_reader" className="btn-secondary">Ler QR Code</Link>
        <Link to="/delivery_list" className="btn-secondary">Ver entregas passadas</Link>
        <Link to="/redeem_coupons" className="btn-secondary">Resgatar E-CO points</Link>
        <Link to="/" className="btn-secondary">SAIR</Link>
      </main>
    </div>
  )
}
