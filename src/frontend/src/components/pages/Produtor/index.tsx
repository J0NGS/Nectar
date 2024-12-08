import { Button, Flex, Radio, Typography } from "antd";
import Search from "antd/es/input/Search";
import { PlusOutlined } from "@ant-design/icons";
import { ProdutorTable } from "../../molecules/tables/ProdutorTable";
import { dataSource } from "./dataSourceMock";

export const ProdutorPage: React.FC  = () => {
  return (
    <Flex gap={20} vertical className="overflow-hidden">
      <Flex justify="space-between">
        <Typography.Title level={4}>Produtores</Typography.Title>
        <Flex gap={8}>
          <Radio.Group value={30} onChange={()=>{}}>
            <Radio.Button value="active">Ativos</Radio.Button>
            <Radio.Button value="inactive">Inativos</Radio.Button>
          </Radio.Group>
          <Search
            placeholder="Pesquise um produtor..."
            allowClear
            onSearch={(value) => console.log(value)}
            style={{ width: 304 }}
          />
          <Button type="primary" icon={<PlusOutlined />}>Novo Produtor</Button>
        </Flex>
      </Flex>
      <ProdutorTable dataSource={dataSource} pagination={{pageSize:8}}/>
    </Flex>
  );
}