import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ img, nombre, precio, id}) => {
  return (
<Card maxW='sm' border='1px' borderColor='gray.200'  margin='10px' height='700px'>
  <CardBody>
    <Image width='100%' height='400px'
      src={img}
      alt={nombre}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='5' alignItems='center'>
      <Heading size='md'>{nombre}</Heading>
      <Text color='pink.400' fontSize='2xl' textAlign='center'>
        ${precio}
      </Text>
    </Stack>
  </CardBody>
 
  <CardFooter justifyContent='center'>
    <ButtonGroup spacing='2'>
      <Button variant='outline' colorScheme='pink' size='lg'>
        <Link to={`/product/${id}`}>Ver detalle</Link>
      </Button>

    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item
