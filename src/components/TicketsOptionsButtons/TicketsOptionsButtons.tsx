import { IconButton, Stack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

export function TicketsOptionsButtons() {
  return (
    <>
      <Stack>
        <IconButton
          variant='outline'
          colorScheme='blue'
          aria-label='Call Sage'
          fontSize='20px'
          icon={<EditIcon />}
          isDisabled
        />
        <IconButton
          variant='outline'
          colorScheme='red'
          aria-label='Call Sage'
          fontSize='20px'
          icon={<DeleteIcon />}
        />
      </Stack>
    </>
  )
}
