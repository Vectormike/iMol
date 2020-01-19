import React from 'react';

import { useDisclosure, Button } from '@chakra-ui/core';

const Buttons = ({ name, ml, close }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <div>
      <Button onClick={onOpen}>{name}</Button>
    </div>
  );
};

export default Buttons;
