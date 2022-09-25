import React, { useState } from 'react'
import PlusMinusButton from '../componenet/PlusMinusButton'

const AddTOCart = () => {
   const [showquantityButton,setshowquantityButton]  = useState(false)

   const handelquantity = (e) =>{
    setshowquantityButton(true)
   }


   {
    if(showquantityButton === true){
      return <PlusMinusButton/>
    } else{
      return <button className='order-class' onClick={handelquantity}>order</button>
    }
  }
}

export default AddTOCart
