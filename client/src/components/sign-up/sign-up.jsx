import React, { useRef, useState } from 'react';
import { useDisclosure, FormControl } from '@chakra-ui/core';
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

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const btnRef = useRef();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const onSubmit = e => {
    if (password !== password2) {
      console.log(password);
    } else {
      console.log(name);
    }
  };

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
        <form onSubmit={onSubmit}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Create a new account
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input
                    ref={firstField}
                    id='name'
                    type='text'
                    name='name'
                    value={name}
                    placeholder='Name'
                    onChange={onChange}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor='username'>Email</FormLabel>
                  <Input
                    ref={firstField}
                    id='email'
                    type='email'
                    name='email'
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

                <Box>
                  <FormLabel htmlFor='confirmpassword'>
                    Confirm Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Confirm Password'
                      name='password2'
                      value={password2}
                      onChange={onChange}
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type='submit' variantColor='blue'>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

export default SignUp;
