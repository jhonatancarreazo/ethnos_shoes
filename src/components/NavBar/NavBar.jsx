import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './NavBar.css'

const Links = [<Link to={'/category/Sandalias'}>Sandalias</Link>,<Link to={'/category/Accesorios'}>Accesorios</Link>,<Link to={'/category/Remeras'}>Remeras</Link>,<Link to={'/category/Buzos'}>Buzos</Link>,<Link to={'/category/Pijamas'}>Pijamas</Link>,<Link to={'/category/Zapatillas'}>Zapatillas</Link>];

const NavLink = ({ children }) => (
  <Box
    as="a"
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    href="#"
  >
    {children}
  </Box>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between" fontWeight='bold' color='pink.500' >
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box width='50px' borderRadius='15px'>
              <Link to='/'><img src="https://raw.githubusercontent.com/jhonatancarreazo/Ethnos/librerias/img/ethnos_logo.png" alt="logo de Ethnos" /></Link>
              </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }} _hover={{ color: 'black' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link} </ NavLink >
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                
               <Link to={'/cart'} ><FaCartShopping /></Link> 
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    
    </>
  );
};

export default NavBar;
