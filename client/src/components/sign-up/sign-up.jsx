import React, { useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
  Box,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea
} from '@chakra-ui/core';

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const btnRef = useRef();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Button
        ref={btnRef}
        mx='auto'
        leftIcon='add'
        variantColor='teal'
        variant='ghost'
        size='sm'
        onClick={onOpen}>
        Register
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        initialFocusRef={firstField}
        finalFocusRef={btnRef}
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter full name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='username'>Email</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter email'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='username'>Password</FormLabel>
                <InputGroup>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SignUp;
