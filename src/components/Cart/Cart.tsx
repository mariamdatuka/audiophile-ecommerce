import React from 'react'
import {ModalOverlay, Modal} from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../Slices/CartSlice';

interface Props{
  isOpen:boolean,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({isOpen,setIsOpen}:Props) => {

   const cartArray=useSelector<any>(state=>state.cartItems);
   const totalItems=useSelector<any>(state=>state.cartTotalAmount);
   console.log(cartArray);
   console.log(totalItems);

  return (
    <>
     {isOpen&&(
        <ModalOverlay onClick={()=>setIsOpen(false)}>
          <Modal>
            <div>
    
              <div>Remove All</div>

            </div>
          </Modal>
        </ModalOverlay>
     )}
    </>
  )
}

export default Cart