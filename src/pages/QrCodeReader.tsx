/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from 'react-router-dom';
import Html5QrcodePlugin from '../components/Html5QrcodePlugin';

export const QrCodeReader = () => {
  const navigate = useNavigate();
  let scaneado = false
  const onSuccess = (result: string) => {
    if(scaneado) return
      scaneado = true  
      navigate(`/delivery_confirmation/${result}`)
  }

  return (
    <div className='flex flex-col h-screen max-h-screen'>
      <div className='h-36 w-full bg-black text-white backdrop-blur-md px-2 py-4'>
        <div className='container mx-auto max-w-lg'>
          <button className="text-2xl" onClick={() => navigate(-1)}>←</button>
          <h1 className='text-2xl text-center'>Mire no código QR gerado pelo ponto de coleta</h1>
        </div>
      </div>
      <main className='flex items-center justify-center container max-w-lg mx-auto '>
        <Html5QrcodePlugin // @ts-ignore
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onSuccess} />
      </main>
    </div>
  )
}
