import { Manager } from "@/types/entitysType";
import { formatCpfCnpj } from "@/utils/formaters/format";
import { Table, TableProps, Typography } from "antd";
import { ColumnProps } from "antd/es/table";
import { ActionsMenu } from "../../ActionsMenu";
import { UserStatus } from "@/types/authTypes";

interface Props extends TableProps<Manager> {
  onEdit?: (manager: Manager) => void;
  onDelete?: (manager: Manager) => void;
  onView?: (manager: Manager) => void;
  onDesable?: (manager: Manager) => void;
}

export const ManagerTable = ({
  onDelete,
  onEdit,
  onView,
  onDesable,
  ...rest
}: Props) => {
  const columns: ColumnProps<Manager>[] = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (_, { user, id }) => (
        <Typography.Link
          className=" w-full truncate"
          title={user?.profile?.name}
          onClick={() => onView?.({ id })}
        >
          {user?.profile?.name}
        </Typography.Link>
      ),
    },
    {
      title: "Documento",
      dataIndex: "email",
      key: "email",
      render: (_, { user }) =>
        user?.profile?.document ? formatCpfCnpj(user?.profile?.document) : "-",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { user }) => user?.auth?.username,
    },
    {
      title: "Telefone",
      dataIndex: "phone",
      key: "phone",
      render: (_, { user }) =>
        user?.profile?.phone ? user?.profile?.phone : "-",
    },
    {
      title: "Ações",
      dataIndex: "actions",
      key: "actions",
      render: (_, item) => (
        <ActionsMenu
          onDelete={
            onDelete && item.user?.status == UserStatus.ACTIVE
              ? () => onDelete?.(item)
              : undefined
          }
          onEdit={onEdit ? () => onEdit?.(item) : undefined}
          onView={onView ? () => onView?.(item) : undefined}
          onDesable={onDesable ? () => onDesable?.(item) : undefined}
        />
      ),
    },
  ];

  return <Table columns={columns} {...rest} />;
};
