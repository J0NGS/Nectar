import { Table, TableProps } from "antd";

export const ProdutorTable = ({...rest}:TableProps) => {
    
    const columns = [
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Telefone',
          dataIndex: 'telefone',
          key: 'telefone',
        },
        {
          title: 'Responsável',
          dataIndex: 'responsableName',
          key: 'responsableName',
        },
      ];

    return (
        
        <Table columns={columns} {...rest} />
    
    );
};