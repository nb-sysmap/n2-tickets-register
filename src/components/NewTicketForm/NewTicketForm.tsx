import React, { useContext, useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  Text,
  FormHelperText,
  InputRightElement,
  Checkbox,
  Center,
  Stack,
  useCheckbox,
  chakra,
  FormErrorMessage,
  IconButton,
} from '@chakra-ui/react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { FiPlusCircle } from 'react-icons/fi'
import { EditCategorys } from '../EditCategorys/EditCategorys'

type Inputs = {
  chamado: string
  data_entrada: string
  data_resolucao: string
  sla_estourado: string
  categoria_problema: string
  pais: string
  tipo_solicitacao: string
  status: string
  quem_resolveu: string
  outras_equipes: string
  data_transferencia: string
  data_retorno: string
  detalhes_resolucao: string
  subcategoria: string
  person_id: string
}

export default function NewTicketForm() {
  const { userLogged } = useContext(AuthContext)
  const [ haldleEditCategory, setHaldleEditCategory ] = useState(false)
  const [timeToSolved, setTimeToSolved] = useState('')
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.table(data)
  }

  const CustomCheckbox = () => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox()

    return (
      <>
        <chakra.label
          display='flex'
          flexDirection='row'
          alignItems='center'
          gridColumnGap={2}
          cursor='pointer'
          {...htmlProps}
        >
          <input {...getInputProps()} hidden />
          <Flex
            alignItems='center'
            justifyContent='center'
            border='2px solid'
            borderColor='blue.500'
            w={4}
            h={4}
            {...getCheckboxProps()}
          >
            {state.isChecked && <Box w={2} h={2} bg='blue.500' />}
          </Flex>
          <Text color='gray.700' {...getLabelProps()}>
            Foi enviado para outras Equipes?
          </Text>
        </chakra.label>
        {state.isChecked && (
          <Flex my={2} gap={3}>
            <FormControl>
              <FormLabel htmlFor='outras_equipes'>Outras Equipes</FormLabel>
              <Input
                _placeholder={{ color: 'facebook.200' }}
                bg='blue.100'
                id='outras_equipes'
                placeholder='TD-ACCT-SS-MDM'
                {...register('outras_equipes')}
              />
            </FormControl>
            <FormControl w={'35%'}>
              <FormLabel htmlFor='data_transferencia'>
                Data da Transferência
              </FormLabel>
              <Input
                _placeholder={{ color: 'facebook.200' }}
                bg='blue.100'
                id='data_transferencia'
                placeholder='23/11/2022'
                {...register('data_transferencia')}
              />
            </FormControl>
            <FormControl w={'35%'}>
              <FormLabel htmlFor='data_retorno'>Data do Retorno</FormLabel>
              <Input
                _placeholder={{ color: 'facebook.200' }}
                bg='blue.100'
                id='data_retorno'
                placeholder='23/11/2022'
                {...register('data_retorno')}
              />
            </FormControl>
          </Flex>
        )}
      </>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl width={'30%'} isInvalid={!!errors.chamado}>
          <Center>
            <FormLabel htmlFor='chamado'>Chamado</FormLabel>
            <InputGroup size='sm'>
              <InputLeftAddon
                bg='gray.50'
                _dark={{
                  bg: 'gray.800',
                }}
                color='gray.500'
                rounded='md'
              >
                #
              </InputLeftAddon>
              <Input
                _placeholder={{ color: 'facebook.200' }}
                bg='blue.100'
                id='chamado'
                placeholder='4509363'
                {...register('chamado', {
                  required: true,
                  minLength: {
                    value: 7,
                    message: 'Um ticket possui pelo menos 7 dígitos',
                  },
                })}
              />
            </InputGroup>
          </Center>
          <FormErrorMessage>
            {errors.chamado && errors.chamado.message}
          </FormErrorMessage>
        </FormControl>
        <Flex>
          <FormControl mr='5%' w={'40%'}>
            <FormLabel htmlFor='data_entrada'>Data de Entrada</FormLabel>
            <Input
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              id='data_entrada'
              placeholder='28/11/2022 23:33'
              {...register('data_entrada', { required: true })}
            />
          </FormControl>
          <FormControl mr='5%' w={'40%'}>
            <FormLabel htmlFor='data_resolucao'>Data de Resolução</FormLabel>
            <Input
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              id='data_resolucao'
              placeholder='29/11/2022 09:05'
              {...register('data_resolucao', { required: true })}
            />
          </FormControl>
          <Stack>
            <Text textAlign='center' fontWeight='semibold'>
              Tempo que o Chamado Permaneceu na Fila
            </Text>
            <Center>
              <Text color='red.400' fontSize='sm'>
                {timeToSolved ? <></> : <>Não Disponível</>}
              </Text>
            </Center>
          </Stack>
        </Flex>
        <Flex mt={8} gap={3}>
          <FormControl>
            <FormLabel htmlFor='sla_estourado'>SLA Estourado?</FormLabel>
            <Select
              id='sla_estourado'
              autoComplete='sla_estourado'
              placeholder='Selecione...'
              focusBorderColor='brand.400'
              shadow='sm'
              size='sm'
              w='full'
              rounded='md'
              bg='blue.100'
              {...register('sla_estourado', { required: true })}
            >
              <option>Sim</option>
              <option>Não</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='pais'>País</FormLabel>
            <Select
              id='pais'
              autoComplete='pais'
              placeholder='Selecione...'
              focusBorderColor='brand.400'
              shadow='sm'
              size='sm'
              w='full'
              rounded='md'
              bg='blue.100'
              {...register('pais', { required: true })}
            >
              <option>Argentina</option>
              <option>Brasil</option>
              <option>Chile</option>
              <option>México</option>
              <option>Colômbia</option>
              <option>Peru</option>
              <option>Malásia</option>
            </Select>
            {/* <Input
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              id='pais'
              placeholder='Chile'
              {...register('pais', { required: true })}
            /> */}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='tipo_solicitacao'>
              Tipo de Solicitação
            </FormLabel>
            <Select
              id='tipo_solicitacao'
              autoComplete='tipo_solicitacao'
              placeholder='Selecione...'
              focusBorderColor='brand.400'
              shadow='sm'
              size='sm'
              w='full'
              rounded='md'
              bg='blue.100'
              {...register('tipo_solicitacao', { required: true })}
            >
              <option>Erro</option>
              <option>Solicitação</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex mt={1} gap={3}>
          <FormControl>
            <Flex align='center' mt='2'>
              <FormLabel htmlFor='categoria_problema'>
                Categoria/Problema
              </FormLabel>
              <EditCategorys />
            </Flex>
            <Input
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              id='categoria_problema'
              placeholder='Dynatrace - Aplicação alarmando'
              {...register('categoria_problema', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='status'>Status</FormLabel>
            <Input
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              id='status'
              placeholder='Resolvido'
              {...register('status', { required: true })}
            />
          </FormControl>
        </Flex>
        <Flex my={2} gap={3}>
          <FormControl width={'30%'}>
            <FormLabel htmlFor='quem_resolveu'>Quem Resolveu</FormLabel>
            <Text>{userLogged.displayName}</Text>
          </FormControl>
          <FormControl w='40%'>
            <FormLabel htmlFor='dtalhes_resolucao'>
              Detalhes da Resolução
            </FormLabel>
            <Textarea
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              placeholder='Cadastro retornado para rascunho - falta aceite de termos.'
              rows={3}
              maxLength={153}
              shadow='sm'
              focusBorderColor='brand.400'
              fontSize={{
                sm: 'sm',
              }}
              {...register('detalhes_resolucao', { required: true })}
            />
          </FormControl>
        </Flex>
        <Flex my={2} gap={3}>
          <FormControl>
            <FormLabel htmlFor='subcategoria'>Subcategoria</FormLabel>
            <Input
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              id='subcategoria'
              placeholder=''
              {...register('subcategoria')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='person_id'>Person ID</FormLabel>
            <Input
              _placeholder={{ color: 'facebook.200' }}
              bg='blue.100'
              id='person_id'
              placeholder=''
              {...register('person_id')}
            />
          </FormControl>
        </Flex>
        <CustomCheckbox />

        <Button
          w='10rem'
          mt='12'
          colorScheme='blue'
          variant='solid'
          type='submit'
        >
          Registrar Ticket
        </Button>
      </form>
    </>
  )
}
