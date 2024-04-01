import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image, Button , IconButton } from '@chakra-ui/react'

//import ItemCount from '../../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
const ItemDetail = ({categoria, descripcion, img, nombre, precio, stock}) => {
    const [ cantidad, setCantidad ] = useState(0)
    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} productos`)
        setCantidad(quantity)
    }

  return (
        <Card maxW='md' display="flex" alignItems="center" max-height="40%">
        <CardHeader>
            <Flex spacing='4'>
            <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>

                <Box>
                <Heading size='sm'>{nombre}</Heading>
                </Box>
            </Flex>
            <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
            />
            </Flex>
        </CardHeader>
        <CardBody>
            <Text fontWeight='bold'>Categoría: {categoria}</Text>
            <Text>
            {descripcion}
            </Text>
            <Text fontWeight='bold'>
            Stock disponible: {stock}
            </Text>
        </CardBody>
        <Image
            objectFit='cover'
            src={img}
            alt='Chakra UI'
        />
         <Text marginTop='10px'>
            ${precio}
            </Text>
    <CardFooter justify='space-between' flexWrap='wrap' sx={{ '& > button': { minW: '136px' } }}>
                {cantidad > 0 ? (
                    
                    <>
                        
                        <Button colorScheme='pink'>
                            <Link to='/cart'>Ir al carrito</Link>
                        </Button>
                    </>
                ) : (
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
                )}
            </CardFooter>
        </Card>
  )
}

export default ItemDetail
