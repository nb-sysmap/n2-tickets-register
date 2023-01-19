import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './routes/routes'

export function App() {

  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  )
}
