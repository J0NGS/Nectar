import { BasePagination } from "@/components/atoms/BasePagination";
import { JobsTable } from "@/components/molecules/tables/JobsTable";
import {
  Graph,
  ItensGraph,
  MonthlyBoard,
} from "@/services/dashboarService/dtos";
import { DashboarService } from "@/services/dashboarService/service";
import { Pageable } from "@/types";
import { Job } from "@/types/entitysType";
import { Card, Col, Flex, Radio, Row } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useEffect, useState } from "react";

const FlowGraph = React.lazy(() => import("@/components/molecules/FlowGraph"));

export const DashboardPage: React.FC = () => {
  const [resource, setResource] = useState<Pageable<Job>>();
  const [resourceGraph, setResourceGraph] = useState<ItensGraph[]>([]);
  const [resourceBoard, setResourceBoard] = useState<MonthlyBoard>();

  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [jobStatus, setJobStatus] = useState<string>("ALL");

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { data } = await DashboarService.getPage(page, {
        status: jobStatus,
        month: date,
      });
      console.log("fetchJobs [DashboardPage]", data);
      setResource(data);
    } catch (error) {
      console.error("fetchJobs [DashboardPage]", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGraphData = async () => {
    setLoading(true);
    try {
      const { data } = await DashboarService.monthlyGraph(date);
      console.log("fetchGraphData", data);

      const startedServices = data.data?.map((item: ItensGraph) => {
        return {
          day: dayjs(item.date).format("DD"),
          value: item.startedServices,
          date: item.date,
          type: "Iniciados",
        };
      });

      const wasteOfServices = data.data?.map((item: ItensGraph) => {
        return {
          day: dayjs(item.date).format("DD"),
          value: item.mediaWasteOfServices,
          date: item.date,
          type: "Desperdiçado",
        };
      });

      const revenueOfServices = data.data?.map((item: ItensGraph) => {
        return {
          day: dayjs(item.date).format("DD"),
          value: item.mediaRevenueOfServices,
          date: item.date,
          type: "Desperdiçado",
        };
      });

      setResourceGraph([
        ...startedServices,
        ...wasteOfServices,
        ...revenueOfServices,
      ]);
    } catch (error) {
      console.error("fetchGraphData", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBoardData = async () => {
    setLoading(true);
    try {
      const { data } = await DashboarService.monthlyBoard(date);
      setResourceBoard(data);

      console.log("fetchBoardData", data);
    } catch (error) {
      console.error("fetchGraphData", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGraphData();
    fetchBoardData();
  }, [date]);

  useEffect(() => {
    fetchJobs();
  }, [page, jobStatus, date]);

  return (
    <Flex gap={20} vertical>
      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 6 }}>
          <Card></Card>
        </Col>
        <Col span={24} md={{ span: 18 }}></Col>
      </Row>
      <Card title="Fluxo de serviço">
        <FlowGraph data={resourceGraph} />
      </Card>
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
