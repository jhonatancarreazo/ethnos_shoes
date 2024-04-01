import React, { useEffect, useState } from 'react';
//import useProductData from '../../hooks/useProductData';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'


const ItemListContainer = ({title}) => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()
  
  useEffect(() => {
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProducts
      .then((el) => setData(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  },[categoryId])

  console.log(data);
  return (
    <div className='tags'>
      {
        loading ? 
        <Spinner
          thickness='10px'
          speed='0.65s'
          emptyColor='gray.200'
          color='pink.500'
          size='xl'
          display='flex'
          flexDirection='column'
          margin='0 auto'
          marginTop='40vh'
        /> : 
        <>
          <h1>{title}</h1>
          <ItemList data={data} className="tag__item"/>
          
        </>
      }
    </div>
  )
}




export default ItemListContainer
