import { Beekeeper } from "@/types/entitysType";
import { formatPhone } from "@/utils/formaters/format";
import { Table, TableProps } from "antd";
import { ColumnProps } from "antd/es/table";

export const ProdutorTable = ({ ...rest }: TableProps<Beekeeper>) => {
  const columns: ColumnProps<Beekeeper>[] = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (_, { profile }) => profile?.name,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { email }) => (email ? email : "-"),
    },
    {
      title: "Telefone",
      dataIndex: "telefone",
      key: "telefone",
      render: (_, { profile }) =>
        profile?.phone ? formatPhone(profile?.phone) : "-",
    },
    {
      title: "Responsável",
      dataIndex: "responsableName",
      key: "responsableName",
      render: (_, { owner }) => owner?.profile?.name,
    },
  ];

  return <Table columns={columns} {...rest} />;
};
