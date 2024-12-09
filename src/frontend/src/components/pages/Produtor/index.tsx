import { Button, Flex, Radio, Typography } from "antd";
import Search from "antd/es/input/Search";
import { PlusOutlined } from "@ant-design/icons";
import { ProdutorTable } from "../../molecules/tables/ProdutorTable";
import { dataSource } from "./dataSourceMock";
import { Beekeeper } from "@/types/entitysType";
import { Pageable } from "@/types";
import { useEffect, useState } from "react";
import { BeekeepersService } from "@/services/beekeepersService/service";
import { BasePagination } from "@/components/atoms/BasePagination";
import { CreateBeekeeperModal } from "@/components/molecules/modais/CreateBeekeeperModal";

export const ProdutorPage: React.FC = () => {
  const [resource, setResource] = useState<Pageable<Beekeeper>>();
  const [status, setStatus] = useState<string>("ACTIVE");
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [createBeekeeperModal, setCreateBeekeeperModal] =
    useState<boolean>(false);
  const [selectedEditBeekeeper, setSelectedEditBeekeeper] =
    useState<Beekeeper>();

  const fetchPage = async () => {
    setLoading(true);
    try {
      const { data } = await BeekeepersService.getPage(page, {
        status,
      });
      console.log("fetchBeekeeper", data);
      setResource(data);
    } catch (error) {
      console.error("fetchBeekeeper", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage();
  }, [page, status]);

  return (
    <>
      <Flex gap={20} vertical className="overflow-hidden">
        <Flex justify="space-between">
          <Typography.Title level={4}>Apicultores</Typography.Title>
          <Flex gap={8}>
            <Radio.Group
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              buttonStyle="solid"
            >
              <Radio.Button value="ACTIVE">Ativos</Radio.Button>
              <Radio.Button value="INACTIVE">Inativos</Radio.Button>
            </Radio.Group>
            <Search
              placeholder="Pesquise um produtor..."
              allowClear
              onSearch={(value) => console.log(value)}
              style={{ width: 304 }}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setCreateBeekeeperModal(true)}
            >
              Novo Apicultor
            </Button>
          </Flex>
        </Flex>

        <Flex gap={20} vertical>
          <ProdutorTable
            dataSource={resource?.content ?? []}
            pagination={false}
            loading={loading}
          />

          <BasePagination page={page} setPage={setPage} pageable={resource} />
        </Flex>
      </Flex>

      <CreateBeekeeperModal
        isOpen={createBeekeeperModal || !!selectedEditBeekeeper}
        onClose={() => {
          setCreateBeekeeperModal(false);
          setSelectedEditBeekeeper(undefined);
        }}
        initialData={selectedEditBeekeeper}
        reload={fetchPage}
      />
    </>
  );
};
