import { Manager } from "@/types/entitysType";
import { formatCpfCnpj } from "@/utils/formaters/format";
import { Table, TableProps } from "antd";
import { ColumnProps } from "antd/es/table";

export const ManagerTable = ({ ...rest }: TableProps<Manager>) => {
  const columns: ColumnProps<Manager>[] = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (_, { user }) => user?.profile?.name,
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
  ];

  return <Table columns={columns} {...rest} />;
};
