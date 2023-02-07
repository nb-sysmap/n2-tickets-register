import { Divider, Stack } from '@chakra-ui/react'
import { ITicket, TicketType } from '../../@Types/Ticket'
import { Ticket } from '../Ticket/Ticket'

const ticketsList: TicketType[] = [
  {
    chamado: '4509363',
    data_entrada: '28/11/2022 23:33',
    data_resolucao: '29/11/2022 09:05',
    tempo_chamado_fila: '',
    sla_estourado: 'NÃO',
    categoria_problema: 'Aprobación bureau pendiente',
    pais: 'México',
    tipo_solicitacao: 'Erro',
    status: 'Resolvido',
    quem_resolveu: 'Leandro',
    outras_equipes: '-',
    data_transferencia: '-',
    data_retorno: '-',
    detalhes_resolucao:
      'Cadastro retornado para rascunho - falta aceite de termos.',
    subcategoria: '-',
    person_id: '-',
  },
  {
    chamado: '4467437',
    data_entrada: '31/10/2022 10:08',
    data_resolucao: '01/11/2022 07:06',
    tempo_chamado_fila: '',
    sla_estourado: 'SIM',
    categoria_problema: 'Dynatrace - Aplicação alarmando',
    pais: 'Brasil',
    tipo_solicitacao: 'Erro',
    status: 'Aguardando Usuario Final',
    quem_resolveu: 'Valdemir',
    outras_equipes: '',
    data_transferencia: '',
    data_retorno: '',
    detalhes_resolucao:
      'Foi identificamos que ja havia um cadastro com o personNumber 63306387 invalidado',
    subcategoria: '',
    person_id: '',
  },
  {
    chamado: '4467437',
    data_entrada: '31/10/2022 10:08',
    data_resolucao: '01/11/2022 07:06',
    tempo_chamado_fila: '',
    sla_estourado: 'SIM',
    categoria_problema: 'Dynatrace - Aplicação alarmando',
    pais: 'Brasil',
    tipo_solicitacao: 'Erro',
    status: 'Aguardando Usuario Final',
    quem_resolveu: 'Valdemir',
    outras_equipes: '',
    data_transferencia: '',
    data_retorno: '',
    detalhes_resolucao:
      'Foi identificamos que ja havia um cadastro com o personNumber 63306387 invalidado',
    subcategoria: '',
    person_id: '',
  },
  {
    chamado: '4467437',
    data_entrada: '31/10/2022 10:08',
    data_resolucao: '01/11/2022 07:06',
    tempo_chamado_fila: '',
    sla_estourado: 'SIM',
    categoria_problema: 'Dynatrace - Aplicação alarmando',
    pais: 'Brasil',
    tipo_solicitacao: 'Erro',
    status: 'Aguardando Usuario Final',
    quem_resolveu: 'Valdemir',
    outras_equipes: '',
    data_transferencia: '',
    data_retorno: '',
    detalhes_resolucao:
      'Foi identificamos que ja havia um cadastro com o personNumber 63306387 invalidado',
    subcategoria: '',
    person_id: '',
  },
  {
    chamado: '4467437',
    data_entrada: '31/10/2022 10:08',
    data_resolucao: '01/11/2022 07:06',
    tempo_chamado_fila: '',
    sla_estourado: 'SIM',
    categoria_problema: 'Dynatrace - Aplicação alarmando',
    pais: 'Brasil',
    tipo_solicitacao: 'Erro',
    status: 'Aguardando Usuario Final',
    quem_resolveu: 'Valdemir',
    outras_equipes: '',
    data_transferencia: '',
    data_retorno: '',
    detalhes_resolucao:
      'Foi identificamos que ja havia um cadastro com o personNumber 63306387 invalidado',
    subcategoria: '',
    person_id: '',
  },
  {
    chamado: '4467437',
    data_entrada: '31/10/2022 10:08',
    data_resolucao: '01/11/2022 07:06',
    tempo_chamado_fila: '',
    sla_estourado: 'SIM',
    categoria_problema: 'Dynatrace - Aplicação alarmando',
    pais: 'Brasil',
    tipo_solicitacao: 'Erro',
    status: 'Aguardando Usuario Final',
    quem_resolveu: 'Valdemir',
    outras_equipes: '',
    data_transferencia: '',
    data_retorno: '',
    detalhes_resolucao:
      'Foi identificamos que ja havia um cadastro com o personNumber 63306387 invalidado',
    subcategoria: '',
    person_id: '',
  },
  {
    chamado: '4467437',
    data_entrada: '31/10/2022 10:08',
    data_resolucao: '01/11/2022 07:06',
    tempo_chamado_fila: '',
    sla_estourado: 'SIM',
    categoria_problema: 'Dynatrace - Aplicação alarmando',
    pais: 'Brasil',
    tipo_solicitacao: 'Erro',
    status: 'Aguardando Usuario Final',
    quem_resolveu: 'Valdemir',
    outras_equipes: '',
    data_transferencia: '',
    data_retorno: '',
    detalhes_resolucao:
      'Foi identificamos que ja havia um cadastro com o personNumber 63306387 invalidado',
    subcategoria: '',
    person_id: '',
  },
  {
    chamado: '4467437',
    data_entrada: '31/10/2022 10:08',
    data_resolucao: '01/11/2022 07:06',
    tempo_chamado_fila: '',
    sla_estourado: 'SIM',
    categoria_problema: 'Dynatrace - Aplicação alarmando',
    pais: 'Brasil',
    tipo_solicitacao: 'Erro',
    status: 'Aguardando Usuario Final',
    quem_resolveu: 'Valdemir',
    outras_equipes: '',
    data_transferencia: '',
    data_retorno: '',
    detalhes_resolucao:
      'Foi identificamos que ja havia um cadastro com o personNumber 63306387 invalidado',
    subcategoria: '',
    person_id: '',
  },
]

export function ViewTickets() {
  return (
    <>
      <Stack spacing={7}>
        {ticketsList.map((ticket: TicketType, index) => {
          return( 
          <div key={index}>
          <Ticket  ticket={ticket} />
          <Divider borderBottomWidth ='4px' borderColor='black'/>
          </div>
          )
        })}
      </Stack>
    </>
  )
}
