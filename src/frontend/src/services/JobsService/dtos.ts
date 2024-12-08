import { JobsStatus, ProductType } from "@/types/entitysType";

export interface CreateJobDTO {
  status?: JobsStatus; // Defaults to JobsStatus.IN_PROGRESS
  origin: string; // Origem
  appearance: string; // Aparência
  scent: string; // Cheiro
  color: string; // Cor

  pesticides: boolean; // Pesticidas
  hiveLoss: boolean; // Perda de enxame

  quantityOfBales: number; // Quantidade de fardos
  weight: number;
  beekeeperId: string;
  startAt: string;
  productType?: ProductType; // Defaults to ProductType.WAX

  postProcessing?: PostProcessingDTO;
  observation?: string;
}

export interface PostProcessingDTO {
  postProcessingBales?: number; // Quantidade de fardos pós-processamento
  postProcessingWeight?: number; // Peso total pós-processamento
  postProcessingRevenue?: number; // Arrecadado
  waste?: number; // Peso desperdiçado
}

export enum JobsStatusFilter {
  ALL = "ALL",
  IN_PROGRESS = "IN_PROGRESS",
  CONCLUDED = "CONCLUDED",
  CANCELED = "CANCELED",
}

export interface GetJobPageDTO {
  pageSize?: number; // Defaults to 10
  status?: JobsStatusFilter; // Defaults to JobsStatusFilter.ALL
}
