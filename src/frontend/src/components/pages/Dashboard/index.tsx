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
import { Card, Col, Flex, Radio, Row, Statistic } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const FlowGraph = React.lazy(() => import("@/components/molecules/FlowGraph"));

export const DashboardPage: React.FC = () => {
  const [resource, setResource] = useState<Pageable<Job>>();
  const [resourceGraph, setResourceGraph] = useState<ItensGraph[]>([]);
  const [resourceBoard, setResourceBoard] = useState<MonthlyBoard>();

  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [jobStatus, setJobStatus] = useState<string>("ALL");

  const [monthlyData, setMonthlyData] = useState({
    collectedWax: 0,
    completedJobs: 0,
    inProcessJobs: 0,
    registeredProducers: 0,
  });

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { data } = await DashboarService.getPage(page, {
        status: jobStatus,
        month: date,
      });
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
      const startedServices = data.data?.map((item: ItensGraph) => ({
        day: dayjs(item.date).format("DD"),
        value: item.startedServices,
        date: item.date,
        type: "Iniciados",
      }));
      const wasteOfServices = data.data?.map((item: ItensGraph) => ({
        day: dayjs(item.date).format("DD"),
        value: item.mediaWasteOfServices,
        date: item.date,
        type: "Desperdiçado",
      }));
      const revenueOfServices = data.data?.map((item: ItensGraph) => ({
        day: dayjs(item.date).format("DD"),
        value: item.mediaRevenueOfServices,
        date: item.date,
        type: "Desperdiçado",
      }));
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
    } catch (error) {
      console.error("fetchBoardData", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMonthlyData = async () => {
    setLoading(true);
    try {
      const data = await DashboarService.getMonthlyData(date); // TO-DO Criar request no back
      setMonthlyData({
        collectedWax: data.collectedWax,
        completedJobs: data.completedJobs,
        inProcessJobs: data.inProcessJobs,
        registeredProducers: data.registeredProducers,
      });
    } catch (error) {
      console.error("Erro ao buscar dados mensais", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonthlyData();
    fetchGraphData();
    fetchBoardData();
  }, [date]);

  useEffect(() => {
    fetchJobs();
  }, [page, jobStatus, date]);

  return (
    <Flex gap={20} vertical>
      {/* Painel de estatísticas mensais */}
      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 6 }}>
          <Card>
            <Statistic
              title="Cera arrecadada no mês"
              value={`${monthlyData.collectedWax}Kg`}
            />
          </Card>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Card>
            <Statistic title="Concluídos" value={monthlyData.completedJobs} />
          </Card>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Card>
            <Statistic title="Em processamento" value={monthlyData.inProcessJobs} />
          </Card>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Card>
            <Statistic
              title="Produtores cadastrados"
              value={monthlyData.registeredProducers}
            />
          </Card>
        </Col>
      </Row>

      {/* Gráfico de fluxo de serviço */}
      <Card title="Fluxo de serviço">
        <FlowGraph data={resourceGraph} />
      </Card>

      {/* Histórico de serviços */}
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
