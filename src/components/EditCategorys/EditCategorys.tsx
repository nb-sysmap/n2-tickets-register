import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  IconButton,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiPlusCircle } from 'react-icons/fi'

type Inputs = {
  categoria: string
}

const categorias = [
  {
    categoria: 'Error Editar Registro',
  },
  {
    categoria: 'Error Al Enviar El Codigo Para BRM',
  },
  {
    categoria: 'Divergencia entre GPP e GERA',
  },
  {
    categoria: 'Peru -Error De Ejecución De Workflow',
  },
  {
    categoria: 'Dynatrace - Aplicação alarmando',
  },
  {
    categoria: 'Dependencia Cad-Uni',
  },
  {
    categoria: 'Alterar URL',
  }
]

export function EditCategorys() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isSubmitting },
    resetField
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.table(data)
    resetField('categoria')
  }

  return (
    <>
      <Flex align='center' mt='-2'>
        <IconButton
          variant='unstyled'
          colorScheme='blue'
          aria-label='Call Sage'
          fontSize='20px'
          icon={<FiPlusCircle />}
          onClick={onOpen}
        />
        <Text ml='-4' fontSize='sm'>
          Editar Categorias
        </Text>
      </Flex>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Nova Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack>
              <FormControl mr='5%' mb='8'>
                <FormLabel htmlFor='categoria'>
                  Insira apenas categorias que não existam
                </FormLabel>
                <Input
                  _placeholder={{ color: 'facebook.200' }}
                  bg='blue.100'
                  id='categoria'
                  placeholder='Nova Categoria'
                  {...register('categoria', { required: true })}
                />
              </FormControl>
              <Stack maxHeight='200px' overflowY='scroll'>
                {categorias.map((item, index) => {
                  if (
                    item.categoria
                      
                      .includes(watch('categoria'))
                  ) {
                    return (
                      <Stack key={index}>
                        <Text>{item.categoria}</Text>
                      </Stack>
                    )
                  }
                })}
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
