import { Flex, Heading, VStack, Text, FormControl, FormLabel, Input, FormHelperText, Button, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const Login = () => {
    return (
        <Flex 
            border={'2px solid red'} 
            minHeight={'100vh'} 
            alignItems={'center'} 
            justifyContent={'center'}
            fontFamily={'Cursive'}
            bgGradient={'linear(to-r, green.300, yellow.400)'}
        >
            <VStack gap={5}>
                <Heading>Login</Heading>
                <Text>Don't have an account? Register here</Text>

                <FormControl>
                    <FormLabel>
                        Username
                    </FormLabel>
                    <InputGroup>
                    <InputLeftElement
                        pointerEvents={'none'}
                        children={'Mr. '}
                        ></InputLeftElement>
                    <Input defaultValue={'Brian Cheloti'} type={'text'}></Input>
                    </InputGroup>
                    <FormHelperText>Enter your Username</FormHelperText>

                </FormControl>

                <FormControl>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <Input type={'password'}></Input>
                    <FormHelperText>Enter Your Password</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>
                        Telephone number
                    </FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents={'none'} children={'+254'}></InputLeftElement>
                        <Input type={'number'}></Input>
                    </InputGroup>
                    <FormHelperText>Enter your primary phone number</FormHelperText>
                </FormControl>

                <Button colorScheme={'blue'} width='200px'>Submit</Button>
            </VStack>
        </Flex>
    )
}

export default Login