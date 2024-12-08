import { IconType } from "react-icons";

export type Map = {
  [key: string]:
    | string
    | number
    | boolean
    | React.RefObject<HTMLInputElement>
    | undefined;
};

export interface ReloadRef {
  reload: () => void;
}

export type ArgsError = {
  errors?: object;
  message?: string;
};

export interface ResponseDTO<T> {
  data?: T | any;
  time: string;
}

export interface Page<T> {
  totalElements: number;
  totalPages: number;
  pageable: any;
  number: number;
  content: Array<T>;
  numberOfElements: number;
  hasContent: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  first: boolean;
  last: boolean;
  size: number;
}

export interface MenuItemsProps {
  label: React.ReactNode;
  key?: React.Key | null;
  icon?: IconType;
  path?: string;
  children?: MenuItemsProps[];
  show?: boolean;
}

export interface UserType {
  id?: string;
  name?: string;
  password?: string;
  email?: string;
  document?: string;
  role?: string;
}

export interface LoginType {
  email: string;
  password: string;
}

export interface InputType extends Map {
  name: string;
  password: string;
  username: string;
}

export interface CNPJ {
  uf?: string;
  cep?: string;
  cnpj?: string;
  pais?: string;
  email?: string;
  porte?: string;
  bairro?: string;
  numero?: string;
  municipio?: string;
  logradouro?: string;
  complemento?: string;

  cnae_fiscal?: number;
  codigo_pais?: string;
  codigo_porte?: number;
  razao_social?: string;
  nome_fantasia?: string;
  capital_social?: number;
  ddd_telefone_1?: string;
}

export interface MonthlyBoard {
  waste: number;
  revenue: number;
  newBeekeepers: number;
  ConcludeServices: number;
  inProcessingServices: number;
}

export interface Graph {
  month?: string;
  data: ItensGraph[];
}

export interface ItensGraph {
  date?: string;
  startedServices: number;
  MediaWasteOfServices: number;
  MediaRevenueOfServices: number;
}

export interface ResetPasswordForm {
  password: string;
}
