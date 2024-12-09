import { BasePagination } from "@/components/atoms/BasePagination";
import { JobsTable } from "@/components/molecules/tables/JobsTable";
import { DashboarService } from "@/services/dashboarService/service";
import { Pageable } from "@/types";
import { Job } from "@/types/entitysType";
import { Card, Col, Flex, Radio, Row } from "antd";
import { useEffect, useState } from "react";

export const DashboardPage: React.FC = () => {
  const [resource, setResource] = useState<Pageable<Job>>();
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [jobStatus, setJobStatus] = useState<string>("ALL");

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { data } = await DashboarService.getPage(page, {
        status: jobStatus,
        moth: date,
      });
      console.log("fetchJobs [DashboardPage]", data);
      setResource(data);
    } catch (error) {
      console.error("fetchJobs [DashboardPage]", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page, jobStatus]);

  return (
    <Flex gap={20} vertical>
      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 6 }}>
          <Card></Card>
        </Col>
        <Col span={24} md={{ span: 18 }}>
          <Card></Card>
        </Col>
      </Row>
      <Card title="Fluxo de serviço"></Card>
      <Card title="Histórico">
        <Flex gap={20} vertical>
          <Flex gap={8} justify="end">
            <Radio.Group
              value={jobStatus}
              onChange={(e) => setJobStatus(e.target.value)}
              buttonStyle="solid"
            >
              <Radio.Button value="ALL">Todos</Radio.Button>
              <Radio.Button value="IN_PROGRESS">Em progresso</Radio.Button>
              <Radio.Button value="CONCLUDED">Concluidos</Radio.Button>
              <Radio.Button value="CANCELED">Cancelados</Radio.Button>
            </Radio.Group>
          </Flex>

          <JobsTable
            dataSource={resource?.content ?? []}
            pagination={false}
            loading={loading}
          />
          <BasePagination page={page} setPage={setPage} pageable={resource} />
        </Flex>
      </Card>
    </Flex>
  );
};
