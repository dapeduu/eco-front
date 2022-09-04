import { OnResultFunction, QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

export const QrCodeReader = () => {
  const navigate = useNavigate();

  const onResult: OnResultFunction = (result, error) => {
    if (error) return console.info("Error while reading qrcode")

    const isCodeValid = true

    if (isCodeValid) {
      navigate('/delivery_confirmation')
      console.log('Scanner Result: ' + result?.getText())
    }
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
        <QrReader scanDelay={1000} constraints={{}} className="w-full" onResult={onResult} />
      </main>
    </div>
  )
}
