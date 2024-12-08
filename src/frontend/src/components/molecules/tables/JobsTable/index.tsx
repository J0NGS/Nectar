import { Job } from "@/types/entitysType";
import { formatDate } from "@/utils/formaters/formatDate";
import { Table, TableProps } from "antd";
import { ColumnProps } from "antd/es/table";

export const JobsTable = ({ ...rest }: TableProps<Job>) => {
  const columns: ColumnProps<Job>[] = [
    {
      title: "Produtor",
      dataIndex: "beekeeper",
      key: "nome",
      render: (_, { beekeeper }) => beekeeper?.profile?.name,
    },
    {
      title: "Iniciado em",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, { createdAt }) => formatDate(createdAt),
    },
    {
      title: "Tipo Processamento",
      dataIndex: "productType",
      key: "productType",
      render: (_, { productType }) => productType,
    },
    {
      title: "Recebido/Entregue",
      dataIndex: "weight",
      key: "weight",
      render: (_, { weight, postProcessingWeight }) =>
        `${weight / 100}Kg /${
          postProcessingWeight ? postProcessingWeight / 100 : 0
        }Kg`,
    },
    {
      title: "Arrecadado",
      dataIndex: "postProcessingRevenue",
      key: "postProcessingRevenue",
      render: (_, { postProcessingRevenue }) =>
        postProcessingRevenue ? postProcessingRevenue / 100 : 0 + "Kg",
    },
    {
      title: "Perdido",
      dataIndex: "waste",
      key: "waste",
      render: (_, { waste }) => (waste ? waste / 100 : 0 + "Kg"),
    },
  ];

  return <Table columns={columns} {...rest} />;
};
