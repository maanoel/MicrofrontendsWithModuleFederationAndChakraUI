import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  import { ChakraProvider } from "@chakra-ui/react";


export default function ModuleB() {  
    return <ChakraProvider><Alert status='success'>
                <AlertIcon />
                <AlertTitle>Esse alerta é emitido do microfrontend 3</AlertTitle>
                <AlertDescription>Module Federation é top demais!!</AlertDescription>
            </Alert></ChakraProvider>;
}