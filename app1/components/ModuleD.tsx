import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

import { ChakraProvider } from "@chakra-ui/react";

export default function ModuleD() {  
    return <ChakraProvider>
              <Alert status='warning'>
                <AlertIcon />
                <AlertTitle>Esse alerta é emitido DA APLICAÇÃO ROOT</AlertTitle>
                <AlertDescription>Module Federation é top demais!!</AlertDescription>
              </Alert>
            </ChakraProvider>;
}