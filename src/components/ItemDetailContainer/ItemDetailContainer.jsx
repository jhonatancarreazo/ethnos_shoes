import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
//import ItemDetail from './ItemDetail/ItemDetail.jsx'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Spinner } from '@chakra-ui/react'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then((el) => setProduct(el))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))

    },[])

  return (
    <div className='spinner__container'>
              {
        loading ? 
        <Spinner
          thickness='10px'
          speed='0.65s'
          emptyColor='gray.200'
          color='Pink.500'
          size='xl'
          display='flex'
          flexDirection='column'
          margin='0 auto'
          marginTop='40vh'
        /> : 
        <>
          <ItemDetail {...product} className='tags__item'/>
              
        </>
      }
    </div>
  )
}

export default ItemDetailContainer
