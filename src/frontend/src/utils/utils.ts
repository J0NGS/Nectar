import { RcFile } from 'antd/es/upload';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';

import { tagColorRange } from '@/theme/themeConfig';
import {
  Address,
  Calendar,
  Client,
  ClientData,
  DayOfWeek,
  Profile,
  Psychologist,
  Session,
  SessionEvent,
  User,
  UserType,
} from '@/types';

import { formatCpf } from './formaters/format';

export async function copyText(link?: string) {
  if (!link) return;

  try {
    await navigator.clipboard.writeText(link);
    toast.success('Link copiado com sucesso!');
  } catch (err) {
    toast.success('Falha ao copiar o link!');
  }
}
export const saveCredentialsToLocalStorage = (
  email: string,
  password: string,
): void => {
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);
};
export const getCredentialsFromLocalStorage = (): {
  email: string | null;
  password: string | null;
} => {
  const email = localStorage.getItem('userEmail');
  const password = localStorage.getItem('userPassword');
  return { email, password };
};
export const clearCredentialsToLocalStorage = (): void => {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userPassword');
};

export const getContrastColor = (hexColor?: string) => {
  if (!hexColor) return 'black';
  hexColor = hexColor.replace('#', '');

  // Converte a cor para componentes RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calcula o brilho usando a fórmula de luminância relativa
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Retorna preto para cores claras e branco para cores escuras
  return brightness > 128 ? 'black' : 'white';
};

export const timeSessionOptions = [
  { value: 15, label: '15 minutos' },
  { value: 20, label: '20 minutos' },
  { value: 30, label: '30 minutos' },
  { value: 40, label: '40 minutos' },
  { value: 45, label: '45 minutos' },
  { value: 50, label: '50 minutos' },
  { value: 60, label: '60 minutos' },
  { value: 70, label: '70 minutos' },
  { value: 80, label: '80 minutos' },
  { value: 90, label: '90 minutos' },
];

export const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const sortDaysOfWeek = (
  calendar: Calendar,
): { [key: string]: DayOfWeek[] } => {
  if (
    calendar == undefined ||
    calendar.week == undefined ||
    calendar.week.daysOfWeek == undefined
  ) {
    return {};
  }

  let daysGroup: { [key: string]: any } = {};

  calendar.week.daysOfWeek.forEach((day) => {
    if (day.dayOfWeek == undefined) return;

    if (daysGroup[day.dayOfWeek]) {
      daysGroup[day.dayOfWeek]?.push(day);
    } else {
      daysGroup[day.dayOfWeek] = [day];
    }
  });

  return daysGroup;
};

export function getRandomTagColor(): string {
  const randomIndex = Math.floor(Math.random() * tagColorRange.length);
  return tagColorRange[randomIndex];
}

export const parseSessionStatus = (status: string) => {
  switch (status) {
    case 'CONFIRMED':
      return 'Confirmado';
    case 'PENDING':
      return 'Pendente';
    case 'CONCLUDED':
      return 'Concluido';
    case 'CANCELED':
      return 'Cancelado';
    case 'REMARKED':
      return 'Remarcado';
    case 'PAYMENT_PENDING':
      return 'Pagamento pendente';
    default:
      return status;
  }
};

export const sessionCovenantTypeOptions = [
  { value: 'CONVENIO', label: 'Convenio' },
  { value: 'PARTICULAR', label: 'Particular' },
];

export const sessionTypeOptions = [
  { value: 'CONSULTA', label: 'Consulta' },
  { value: 'RETORNO', label: 'Retorno' },
];

export const sessionLocalOptions = [
  { value: 'REMOTE', label: 'Remoto' },
  { value: 'HYBRID', label: 'Híbrido' },
  { value: 'IN_PERSON', label: 'Presencial' },
];

export const repeatModeTypeOptions = [
  { value: 'SINGLE', label: 'Sessão unica' },
  { value: 'WEEKLY', label: 'Semanal' },
  { value: 'BIWEEKLY', label: 'A cada duas semanas' },
  { value: 'MONTHLY', label: 'Mensal' },
];

export const flowTypeOptions = [
  { value: 'OUTPUT', label: 'Saída' },
  { value: 'INPUT', label: 'Entrada' },
];

export const invoiceFluxOptions = [
  { value: 'OUT', label: 'Despesa' },
  { value: 'IN', label: 'Receita' },
];

export const paymentFormOptions = [
  { value: 'CREDIT', label: 'Crédito' },
  { value: 'BOLETO', label: 'Boleto' },
  { value: 'PIX', label: 'Pix' },
  { value: 'MONEY', label: 'Dinheiro' },
];

export const flowExternalTypeOptions = [
  { value: 'SESSION', label: 'Sessão' },
  { value: 'ClientE', label: 'Cliente' },
  { value: 'PSYCHOLOGIST', label: 'psicologo' },
  { value: 'EXPENSE', label: 'Despesa' },
];

export const flowStatusOptions = [
  { value: 'WAITING', label: 'Em aberto' },
  { value: 'DONE', label: 'Processado' },
  { value: 'LATED', label: 'Em atraso' },
  { value: 'CANCELED', label: 'Cancelado' },
];

export const biologicalSexOptions = [
  { value: 'MALE', label: 'Masculino' },
  { value: 'FEMALE', label: 'Feminino' },
  { value: 'OTHER', label: 'Outro' },
];

export const clientFrequencyOptions = [
  { value: 'SINGLE', label: 'Sessão unica' },
  { value: 'WEEKLY', label: 'Semanal' },
  { value: 'MONTHLY', label: 'Mensal' },
  { value: 'YEAR', label: 'Anual' },
];

export const genderOptions = [
  { value: 'CISGENDER', label: 'Cisgênero' },
  { value: 'TRANSGENDER', label: 'Transgênero' },
  { value: 'NON_BINARY', label: 'Não-binário' },
  { value: 'AGENDER', label: 'Agênero' },
  { value: 'GENDER_QUEER', label: 'Gênero Queer' },
  { value: 'GENDER_FLUID', label: 'Gênero Fluido' },
  { value: 'OTHER', label: 'Outro' },
];

export const stateOptions = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];

export const relationShipsOptions = [
  { value: 'Pai/Mãe' },
  { value: 'Filho(a)' },
  { value: 'Irmão(ã)' },
  { value: 'Avô(ó)' },
  { value: 'Neto(a)' },
  { value: 'Tio(a)' },
  { value: 'Sobrinho(a)' },
  { value: 'Primo(a)' },
  { value: 'Padrasto(a)' },
  { value: 'Enteado(a)' },
  { value: 'Genro/Nora' },
  { value: 'Sogro(a)' },
  { value: 'Cunhado(a)' },
  { value: 'Bisavô(ó)' },
  { value: 'Bisneto(a)' },
  { value: 'Tataravô(ó)' },
  { value: 'Tataraneto(a)' },
  { value: 'Companheiro(a)' },
  { value: 'Namorado(a)' },
];

export function getProfile(entity?: User | Client | Psychologist): Profile {
  if (!entity) return {} as Profile;

  if ('profile' in entity) {
    return entity.profile;
  } else if ('user' in entity && 'profile' in entity.user) {
    return entity.user.profile;
  } else {
    throw new Error('Entidade não possui um Profile.');
  }
}

export function calculateAge(birthDate?: string) {
  if (!birthDate) return undefined;

  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const month = today.getMonth() - birthDateObj.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age + ' anos';
}

export const formatterAddres = (address?: Address) => {
  if (!address) return 'Não informado';
  return `${address?.city}/${address?.state}`;
};

export function getMetadata(metadata: string): SessionEvent[] {
  try {
    const metadataArray = JSON.parse(metadata);
    return metadataArray;
  } catch (error) {
    console.error('Erro ao parsear JSON:', error);
    return [];
  }
}

export function getNextRepetitionDate(
  repetitionType: string,
  repetitionNumber: number,
  startDate: Date = new Date(), // opcionalmente, você pode fornecer uma data de início
): Date {
  let nextDate = new Date(startDate); // Copia a data de início

  if (repetitionNumber == 0) return nextDate;

  switch (repetitionType) {
    case 'SINGLE':
      return nextDate; // Retorna a data de início sem alteração

    case 'WEEKLY':
      nextDate.setDate(nextDate.getDate() + 7 * repetitionNumber);
      break;

    case 'BIWEEKLY':
      nextDate.setDate(nextDate.getDate() + 14 * repetitionNumber);
      break;

    case 'MONTHLY':
      nextDate.setMonth(nextDate.getMonth() + repetitionNumber);
      break;

    default:
      throw new Error('Tipo de repetição inválido');
  }

  return nextDate;
}

export const getColorBySessionStatus = (status?: string) => {
  switch (status) {
    case 'PENDING':
      return '#FFB300';
    case 'CONFIRMED':
      return '#FFD700';
    case 'CONCLUDED':
      return '#32CD32';
    case 'CANCELED':
      return '#FF6F61';
    default:
      return '-';
  }
};

export const convertBoleanToString = (value?: boolean) => {
  return value ? 'Sim' : 'Não';
};

export const convertClientToClientData = (client: Client): ClientData => {
  const data = {
    ...client,
    ...client.user.profile,
    responsible: client?.responsible
      ? {
          name: client.responsible?.profile?.name,
          document: client.responsible?.profile?.document,
          birthDate: client.responsible?.profile?.birthDate,
          phone: client.responsible?.phone,
          email: client.responsible?.email,
          kinship: client.responsible?.kinship,
        }
      : undefined,
  };

  return data;
};

export const processTemplateText = (
  fileText: string,
  fileName: string,
  session?: Session,
  client?: Client,
  psychologist?: Psychologist,
) => {
  const formatOrDefault = (value: string | undefined) =>
    value || 'Não informado';

  const placeholders = {
    '{{psychologist.name}}': formatOrDefault(
      psychologist?.user.profile.name ||
        session?.psychologist?.user.profile.name,
    ),
    '{{psychologist.crp}}': formatOrDefault(
      psychologist?.crp || session?.psychologist?.crp,
    ),
    '{{psychologist.address}}': formatOrDefault(
      psychologist?.user.profile.address.city ||
        session?.psychologist?.user.profile.address.city,
    ),
    '{{document.date}}': dayjs().format('DD [de] MMM [de] YYYY'),
    '{{patient.name}}': formatOrDefault(
      client?.user.profile.name || session?.patient?.user.profile.name,
    ),
    '{{session.date}}': session
      ? dayjs(session.dateTime).format('DD/MM/YYYY')
      : '(Informe uma data)',
    '{{session.starthour}}': session
      ? dayjs(session.dateTime).format('HH:mm')
      : '(Insira o horário de início)',
    '{{session.endhour}}': session
      ? dayjs(session.dateTime)
          .add(session.duration || 0, 'minute')
          .format('HH:mm')
      : '(Insira o horário de término)',
    '{{patient.document}}': client?.user.profile.document
      ? fileName === 'declaracao_de_comparecimento.lexical'
        ? formatCpf(client.user.profile.document)
        : `Documento: ${formatCpf(client.user.profile.document)}`
      : session?.patient?.user.profile.document
      ? fileName === 'declaracao_de_comparecimento.lexical'
        ? formatCpf(session.patient.user.profile.document)
        : `Documento: ${formatCpf(session.patient.user.profile.document)}`
      : 'Não informado',
  };

  return Object.entries(placeholders).reduce(
    (processedText, [key, value]) =>
      processedText.replace(new RegExp(key, 'g'), value),
    fileText,
  );
};

export const disablePastDates = (current: dayjs.Dayjs) => {
  return current && current < dayjs().startOf('day');
};

export const convertRcFileToFile = (rcFile: RcFile): File => {
  return new File([rcFile], rcFile.name, { type: rcFile.type });
};
