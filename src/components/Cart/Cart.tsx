import React from 'react'
import {ModalOverlay, Modal} from './Styles';

interface Props{
  isOpen:boolean,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({isOpen,setIsOpen}:Props) => {
  return (
    <>
     {isOpen&&(
        <ModalOverlay onClick={()=>setIsOpen(false)}>
          <Modal>
            <div>
              <p>CART<span>(0)</span></p>
              <div>Remove All</div>
            </div>
          </Modal>
        </ModalOverlay>
     )}
    </>
  )
}

export default Cart