export interface ITicket {
  ticket: TicketType
}

export type TicketType = {
  chamado: string;
  data_entrada: string;
  data_resolucao: string;
  tempo_chamado_fila: string;
  sla_estourado: string;
  categoria_problema: string;
  pais: string;
  tipo_solicitacao: string;
  status: string;
  quem_resolveu: string;
  outras_equipes: string;
  data_transferencia: string;
  data_retorno: string;
  detalhes_resolucao: string;
  subcategoria: string;
  person_id: string;
}