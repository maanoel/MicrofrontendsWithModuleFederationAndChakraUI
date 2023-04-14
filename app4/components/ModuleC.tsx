import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

import { ChakraProvider } from "@chakra-ui/react";

export default function ModuleC() {  
    return <ChakraProvider>
              <Alert status='warning'>
                <AlertIcon />
                <AlertTitle>Esse alerta é emitido do microfrontend 4</AlertTitle>
                <AlertDescription>Module Federation é top demais!!</AlertDescription>
              </Alert>
            </ChakraProvider>;
}