import React from 'react'
import useCounter from '../../../hooks/useCounter'
import './ItemCount.css'
import { Button, Heading } from '@chakra-ui/react'
const ItemCount = ({stock, initialValue, onAdd}) => {

    const { count , incrementar, decrementar } = useCounter(stock, initialValue)

    
  return (
    <div className='counterContainer'>
        <Button className='btnCounter' colorScheme='pink' onClick={decrementar}>-</Button>
        <Heading m={2}>{count}</Heading>
        <Button className='btnCounter'  colorScheme='pink' onClick={incrementar}>+</Button>
        <Button colorScheme='pink' ml={2} onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount
