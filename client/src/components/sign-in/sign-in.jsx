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
  InputGroup
} from '@chakra-ui/core';

const SignIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const btnRef = useRef();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <>
      <Button
        ref={btnRef}
        mx='auto'
        leftIcon='add'
        variantColor='teal'
        size='sm'
        variant='ghost'
        onClick={onOpen}>
        Sign In
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        finalFocusRef={btnRef}
        onClose={onClose}>
        <DrawerOverlay />
        <form onSubmit={handleSubmit}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>Sign In</DrawerHeader>

            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Email</FormLabel>
                  <Input
                    ref={firstField}
                    type='text'
                    name='name'
                    value={email}
                    placeholder='Email'
                    onChange={onChange}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor='username'>Password</FormLabel>
                  <InputGroup>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Password'
                      name='password'
                      value={password}
                      onChange={onChange}
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
              <Button ref={btnRef} variantColor='blue'>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

export default SignIn;
