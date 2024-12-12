import { Job } from "@/types/entitysType";
import { formatDate } from "@/utils/formaters/formatDate";
import { formatDateAndTime } from "@/utils/formaters/formatTime";
import { Descriptions } from "antd";

interface JobDescriptionProps {
  job: Job;
}

export const JobDescription: React.FC<JobDescriptionProps> = ({ job }) => {
  return (
    <Descriptions
      title="Serviço"
      layout="vertical"
      bordered
      column={{ xxl: 4, xl: 3, lg: 2, md: 1, sm: 1, xs: 1 }}
    >
      <Descriptions.Item label="Origem">{job.origin}</Descriptions.Item>
      <Descriptions.Item label="Aparência">{job.appearance}</Descriptions.Item>
      <Descriptions.Item label="Cheiro">{job.scent}</Descriptions.Item>
      <Descriptions.Item label="Cor">{job.color}</Descriptions.Item>
      <Descriptions.Item label="Pesticidas">
        {job.pesticides ? "Sim" : "Não"}
      </Descriptions.Item>
      <Descriptions.Item label="Perda de Enxame">
        {job.hiveLoss ? "Sim" : "Não"}
      </Descriptions.Item>
      <Descriptions.Item label="Quantidade de Fardos">
        {job.quantityOfBales}
      </Descriptions.Item>
      <Descriptions.Item label="Peso Total">
        {job.weight / 100} kg
      </Descriptions.Item>
      <Descriptions.Item label="Data de Início">
        {formatDate(job.startAt)}
      </Descriptions.Item>

      {job.observation && (
        <Descriptions.Item label="Observações">
          {job.observation}
        </Descriptions.Item>
      )}
      <Descriptions.Item label="Tipo de Produto">
        {job.productType}
      </Descriptions.Item>
      <Descriptions.Item label="Status">{job.status}</Descriptions.Item>
      {job.beekeeper && (
        <Descriptions.Item label="Apicultor">
          {job.beekeeper.profile?.name}
        </Descriptions.Item>
      )}

      {job.owner && (
        <Descriptions.Item label="Responsável">
          {job.owner.profile?.name}
        </Descriptions.Item>
      )}

      {job.createdAt && (
        <Descriptions.Item label="Criado Em">
          {formatDateAndTime(job.createdAt)}
        </Descriptions.Item>
      )}
    </Descriptions>
  );
};
