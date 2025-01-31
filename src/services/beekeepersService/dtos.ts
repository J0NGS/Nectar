import { Address, UserStatus } from "@/types/authTypes";

export interface GetJobPageDTO {
  pageSize?: number; // Defaults to 10
  status?: UserStatus; // Defaults to JobsStatusFilter.ALL
}

export interface CreateBeekeeperDTO {
  status?: UserStatus; // Defaults to UserStatus.ACTIVE
  name: string;
  email: string;
  document: string; // Documento de identificação
  phone: string;
  birthDate: string; // ISO date format (yyyy-MM-dd)
  address?: Address; // Optional or null
}
