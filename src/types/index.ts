import { IconType } from "react-icons";

export type Map = {
  [key: string]:
    | string
    | number
    | boolean
    | React.RefObject<HTMLInputElement>
    | undefined;
};

export type PickerMode =
  | "time"
  | "date"
  | "week"
  | "month"
  | "quarter"
  | "year";

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

export interface Pageable<T> {
  content: Array<T>;
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
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
  username?: string;
  document?: string;
  phone?: string;
  email?: string;
  role?: string;
  authorities?: string[];
}

export interface UserEdit {
  name?: string;
  email?: string;
  document?: string;
  phone?: string;
  password?: string;
}

export interface LoginType {
  username: string;
  password: string;
  remember?: boolean;
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

export interface ResetPasswordForm {
  password: string;
}

export interface SelectOption extends Map {
  label: string;
  value: string;
}
