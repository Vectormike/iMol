import React from 'react';
import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/core';

import Buttons from '../button/button';

const Modals = ({ button, title, firstname, lastname }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const initialRef = React.useRef();

  return (
    <div>
      <Button onClick={onOpen}>{button}</Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>{firstname}</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>{lastname}</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variantColor='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Modals;
