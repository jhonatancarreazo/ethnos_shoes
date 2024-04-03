import React, { useEffect, useState } from 'react';
import { getProductById } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Flex, Spinner } from '@chakra-ui/react';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((el) => {
        setProduct(el);
        setLoading(false);
      })
      .catch((error) => console.log(error));

  }, [productId]);

  return (
    <div className='spinner__container'>
      {
        loading ?
          <Flex justifyContent='center' alignItems='center' height='100vh'>
            <Spinner
              thickness='10px'
              speed='0.65s'
              emptyColor='gray.200'
              color='pink.500'
              size='xl'
              margin='0 auto'
            />
          </Flex>
          :
          <ItemDetail {...product} />
      }
    </div>
  );
};

export default ItemDetailContainer;
