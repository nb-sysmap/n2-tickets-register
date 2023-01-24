import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './contexts/Auth/AuthProvider'
import { AppRoutes } from './routes/routes'

export function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </AuthProvider>
  )
}
