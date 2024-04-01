import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Box } from '@chakra-ui/react';

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box>
            <Button onClick={onOpen} colorScheme="pink" variant="outline">abrir carrito</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign='center'>Carrito de compras - Ethnos</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* lista de compra con divider */}
                    </ModalBody>

                    <ModalFooter>
                        <Button  mr={3} onClick={onClose}>
                            Limpiar Carrito
                        </Button>
                        <Button colorScheme='pink' variant='ghost'>Comprar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Cart;
