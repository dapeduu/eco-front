
import { ReactNode, useState } from 'react';
import Modal from 'react-modal';

type ModalWrapperProps = {
  children: ReactNode,
  content: ReactNode
}

export const ModalWrapper = ({ children, content }: ModalWrapperProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)

  return (
    <div className="w-full">
      <button className='w-full' onClick={openModal}>{children}</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal" overlayClassName="modalOverlay">
        {content}
      </Modal>
    </div >
  )
}
