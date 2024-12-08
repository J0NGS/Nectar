export const parserDayToPt = (day: string) => {
  switch (day) {
    case 'SUNDAY':
      return 'Domingo';
    case 'MONDAY':
      return 'Segunda-feira';
    case 'TUESDAY':
      return 'Terça-feira';
    case 'WEDNESDAY':
      return 'Quarta-feira';
    case 'THURSDAY':
      return 'Quinta-feira';
    case 'FRIDAY':
      return 'Sexta-feira';
    case 'SATURDAY':
      return 'Sabádo';
  }
};

export const parserDayToInt = (day: string): number => {
  switch (day) {
    case 'SUNDAY':
      return 1;
    case 'MONDAY':
      return 2;
    case 'TUESDAY':
      return 3;
    case 'WEDNESDAY':
      return 4;
    case 'THURSDAY':
      return 5;
    case 'FRIDAY':
      return 6;
    case 'SATURDAY':
      return 7;
    default:
      return -1;
  }
};

export const parseDay = (day: string) => {
  switch (day) {
    case 'Dom':
      return 'SUNDAY';
    case 'Seg':
      return 'MONDAY';
    case 'Ter':
      return 'TUESDAY';
    case 'Qua':
      return 'WEDNESDAY';
    case 'Qui':
      return 'THURSDAY';
    case 'Sex':
      return 'FRIDAY';
    case 'Sáb':
      return 'SATURDAY';
  }
};

export const parseToTypeDay = (type: string) => {
  switch (type) {
    case 'Remoto':
      return 'REMOTE';
    case 'Presencial':
      return 'IN_PERSON';

    case 'REMOTE':
      return 'Remoto';
    case 'IN_PERSON':
      return 'Presencial';

    default:
      return type;
  }
};

export const getTagTypeName = (name: string) => {
  switch (name) {
    case 'PATIENT':
      return 'Cliente';
    case 'PSYCHOLOGIST':
      return 'Lançamento';
    case 'SESSION':
      return 'Sessão';
    case 'PACKAGE':
      return 'Pacote';
    default:
      return '-';
  }
};

export const getFinanceFlowTypeSerialize = (name?: string) => {
  switch (name) {
    case 'INPUT':
      return 'Entrada';
    case 'IN':
      return 'Receita';
    case 'OUTPUT':
      return 'Saída';
    case 'OUT':
      return 'Despesa';
    default:
      return '-';
  }
};

export const getSessionPaymentStatusSerialize = (status?: string) => {
  switch (status) {
    case 'PAID':
      return 'Pago';
    case 'CONSIDERED_PAID':
      return 'Pago';
    case 'PARTIALLY_PAID':
      return 'Parcialmente pago';
    case 'PENDING':
      return 'Pagamento em aberto';
    case 'LATED':
      return 'Pagamento Em atraso';
    default:
      return '-';
  }
};

export const getEventStatus = (status: string) => {
  switch (status) {
    case 'OPEN':
      return 'Agendado';
    case 'DONE':
      return 'Concluido';
    case 'CANCELED':
      return 'Cancelado';
    default:
      return '-';
  }
};

export const getSessionTypeSerialize = (status?: string) => {
  switch (status) {
    case 'CONSULTA':
      return 'Consulta';
    case 'RETORNO':
      return 'Retorno';
    default:
      return '-';
  }
};

export const getSessionLocalSerializee = (status?: string) => {
  switch (status) {
    case 'REMOTE':
      return 'Remoto';
    case 'HYBRID':
      return 'Híbrido';
    case 'IN_PERSON':
      return 'Presencial';
    default:
      return '-';
  }
};

export const getSessionStatusSerializee = (status?: string) => {
  switch (status) {
    case 'PENDING':
      return 'Pendente';
    case 'CONFIRMED':
      return 'Agendada';
    case 'CONCLUDED':
      return 'Concluída';
    case 'CANCELED':
      return 'Cancelada';
    default:
      return '-';
  }
};

export const getExpenseStatusSerializee = (status?: string) => {
  switch (status) {
    case 'VALID':
      return 'Ativo';
    case 'DELETED':
      return 'Excluído';
    default:
      return '-';
  }
};

export const getBanckStatusSerializee = (status?: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'Ativo';
    case 'BLOCKED':
      return 'Bloqueado';
    case 'CANCELED':
      return 'Cancelado';
    case 'DELETED':
      return 'Excluído';
    default:
      return '-';
  }
};

export const getSourceTypeSerializee = (status?: string) => {
  switch (status) {
    case 'EXPENSE':
      return 'Despesa';
    case 'SESSION':
      return 'Sessão';
    case 'USER':
      return 'Usuário';
    case 'OTHERS':
      return 'Outros';
    default:
      return '-';
  }
};

export const getRepeatModeSerializee = (status?: string) => {
  switch (status) {
    case 'SINGLE':
      return 'Única';
    case 'DAILY':
      return 'Diária';
    case 'WEEKLY':
      return 'Semanal';
    case 'MONTHLY':
      return 'Mensal';
    case 'YEARLY':
      return 'Anual';
    default:
      return '-';
  }
};

export const getflowStatusSerializee = (status?: string) => {
  switch (status) {
    case 'LATED':
      return 'Em atraso';
    case 'PAID':
      return 'Pago';
    case 'DONE':
      return 'Processado';
    case 'WAITING':
      return 'Em aberto';
    case 'EXPIRED':
      return 'Expirado';
    case 'CANCELED':
      return 'Cancelado';
    default:
      return '-';
  }
};

export const getBooleanSerializee = (status?: boolean) => {
  switch (status) {
    case true:
      return 'Sim';
    case false:
      return 'Não';
    default:
      return '-';
  }
};

export const getInvoiceTypeSerializee = (status?: string) => {
  switch (status) {
    case 'SUBSCRIPTION':
      return 'Assinatura';
    case 'SESSION':
      return 'Sessão';
    case 'EXPENSE':
      return 'Despesa';
    case 'CLIENT':
      return 'Cliente';
    case 'PATIENT':
      return 'Cliente';
    default:
      return '-';
  }
};

export const getInvoiceStatuserialize = (status?: string) => {
  switch (status) {
    case 'OPEN':
      return 'Aberta';
    case 'LATED':
      return 'Em atraso';
    case 'PAID':
      return 'Paga';
    case 'EXPIRED':
      return 'Expirada';
    case 'CANCELED':
      return 'Cancelada';
    default:
      return '-';
  }
};

export const getPaymentFormSerializee = (status?: string) => {
  switch (status) {
    case 'CREDIT':
      return 'Crédito';
    case 'BOLETO':
      return 'Boleto';
    case 'PIX':
      return 'Pix';
    case 'MONEY':
      return 'Dinheiro';
    default:
      return '-';
  }
};

export const getExternalIntegrationCalendarSerializee = (value?: string) => {
  switch (value) {
    case 'GOOGLE':
      return 'Google Calendar';
    default:
      return 'Não integrado';
  }
};

export const extractHoursAndMinutes = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return { hours, minutes };
};

export const getInstallmentsSerialize = (installments?: number) => {
  switch (installments) {
    case 1:
      return 'Única';
    default:
      return `${installments} parcelas`;
  }
};

export const getFrequencySerialized = (frequency?: string) => {
  switch (frequency) {
    case 'SINGLE':
      return 'Única';
    case 'WEEKLY':
      return 'Semana';
    case 'MONTHLY':
      return 'Mês';
    case 'YEAR':
      return 'ANO';
    default:
      return 'N/A';
  }
};

export const getBiologicalSexSerialized = (sex?: string) => {
  switch (sex) {
    case 'MALE':
      return 'Masculino';
    case 'FEMALE':
      return 'Feminino';
    default:
      return 'Desconhecido';
  }
};

export const getGenderSerialized = (gender?: string) => {
  switch (gender) {
    case 'CISGENDER':
      return 'Cisgênero';
    case 'TRANSGENDER':
      return 'Transgênero';
    case 'NON_BINARY':
      return 'Não-binário';
    case 'AGENDER':
      return 'Agênero';
    case 'GENDER_QUEER':
      return 'Gênero queer';
    case 'GENDER_FLUID':
      return 'Gênero fluido';
    case 'OTHER':
      return 'Outro';
    default:
      return 'Desconhecido';
  }
};

export const getCovenantSerialized = (covenant?: string) => {
  switch (covenant) {
    case 'PARTICULAR':
      return 'Particular';
    case 'CONVENIO':
      return 'Convênio';
    default:
      return 'Desconhecido';
  }
};

export const getSessionFileNameSerialized = (fileName: string) => {
  switch (fileName) {
    case 'atestado_psicologico':
      return 'Atestado psicológico';
    case 'parecer_psicologico':
      return 'Parecer psicológico';
    case 'laudo_psicologico':
      return 'Laudo psicológico';
    case 'relatorio_psicologico':
      return 'Relatório psicológico';
    case 'relatorio_multiprofissional':
      return 'Relatório multiprofissional';
    case 'evolucao':
      return 'Evolução';
    case 'transcricao':
      return 'Transcrição';
    case 'declaracao_de_comparecimento':
      return 'Declaração de comparecimento';
    default:
      return fileName;
  }
};
