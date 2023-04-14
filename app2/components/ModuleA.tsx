import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

import { ChakraProvider } from "@chakra-ui/react";


export default function ModuleA() {  
    return <ChakraProvider>
              <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>Esse alerta é emitido do microfrontend 2</AlertTitle>
                  <AlertDescription>Module Federation é top demais!!</AlertDescription>
              </Alert>
            </ChakraProvider>;
}