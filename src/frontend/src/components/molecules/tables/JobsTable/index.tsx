import { Job, JobsStatus } from "@/types/entitysType";
import { formatDate } from "@/utils/formaters/formatDate";
import { Table, TableProps, Typography } from "antd";
import { ColumnProps } from "antd/es/table";
import { ActionsMenu } from "../../ActionsMenu";

interface Props extends TableProps<Job> {
  onEdit?: (manager: Job) => void;
  onCancel?: (manager: Job) => void;
  onView?: (manager: Job) => void;
  onProcess?: (manager: Job) => void;
}

export const JobsTable = ({
  onCancel,
  onEdit,
  onProcess,
  onView,
  ...rest
}: Props) => {
  const mountCustomActions = (job: Job) => {
    const actions = [];

    if (onCancel && job.status != JobsStatus.CANCELED) {
      actions.push({
        label: "Cancelar",
        on: () => onCancel(job),
      });
    }

    if (onProcess && job.status === JobsStatus.IN_PROGRESS) {
      actions.push({
        label: "Processar",
        on: () => onProcess(job),
      });
    }

    return actions;
  };

  const columns: ColumnProps<Job>[] = [
    {
      title: "Ind.",
      dataIndex: "id",
      key: "id",
      className: "text-sm",
      render: (_, item) => (
        <Typography.Link onClick={() => onView?.(item)}>
          {item.id?.substring(0, 8)}
        </Typography.Link>
      ),
    },
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
    {
      title: "Ações",
      dataIndex: "actions",
      key: "actions",
      render: (_, item) => (
        <ActionsMenu
          onEdit={onEdit ? () => onEdit?.(item) : undefined}
          onView={onView ? () => onView?.(item) : undefined}
          actions={mountCustomActions(item)}
        />
      ),
    },
  ];

  return <Table columns={columns} {...rest} />;
};
