import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const newData = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
        setData(newData);
      } catch (error) {
        setError(error.message); // Almacenar el mensaje de error en el estado
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className='tags'>
      {loading ? (
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
      ) : error ? ( // Mostrar error si está presente
        <div className='error-message'>{error}</div>
      ) : (
        <>
          <h1>{title}</h1>
          <ItemList data={data} className='tag__item' />
        </>
      )}
    </div>
  );
};



export default ItemListContainer;
