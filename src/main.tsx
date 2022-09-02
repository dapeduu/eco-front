import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { DeliveryConfirmation } from './pages/DeliveryConfirmation';
import { DeliveryList } from './pages/DeliveryList';
import { Login } from './pages/Login';
import { Map } from './pages/Map';
import { Menu } from './pages/Menu';
import { QrCodeReader } from './pages/QrCodeReader';
import { SpecificDelivery } from './pages/SpecificDelivery';
import { RedeemCoupons } from './pages/RedeemCoupons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Login />} />
        <Route path="/specific_delivery/:id" element={<SpecificDelivery />} />
        <Route path="/delivery_list" element={<DeliveryList />} />
        <Route path="/delivery_confirmation" element={<DeliveryConfirmation />} />
        <Route path="/qr_code_reader" element={<QrCodeReader />} />
        <Route path="/redeem_coupons" element={<RedeemCoupons />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
