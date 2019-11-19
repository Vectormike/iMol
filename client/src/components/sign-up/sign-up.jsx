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

import { connect } from 'react-redux';
import { showAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';

import PropTypes from 'prop-types';

const SignUp = ({ showAlert, register }) => {
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
  const handleSubmit = async e => {
    e.preventDefault();
    register({ name, email, password });
    // if (password !== password2) {
    //   showAlert('Passwords do not match', 'warning', 5000);
    //   return;
    // } else {
    //   // Send details to server
    //   register(name, email, password);
    // }
  };

  return (
    <>
      <Button
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
        <form onSubmit={handleSubmit}>
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
              <Button ref={btnRef} type='submit' variantColor='blue'>
                Register
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

SignUp.propTypes = {
  showAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  showAlert: (message, status, timeout) =>
    dispatch(showAlert(message, status, timeout)),
  register: (name, email, password) => dispatch(register(name, email, password))
});

export default connect(null, mapDispatchToProps)(SignUp);
