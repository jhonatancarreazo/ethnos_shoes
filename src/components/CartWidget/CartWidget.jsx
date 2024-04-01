import React from 'react'
import { Box } from '@chakra-ui/react'
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
      <Box mr='3'>
        <Link to='/cart'><IoCartSharp />hola mundo</Link>
      </Box> 
    </div>
  )
}

export default CartWidget
