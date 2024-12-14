import { BasePagination } from "@/components/atoms/BasePagination";
import { LoadingContent } from "@/components/atoms/LoadingContent";
import { JobsTable } from "@/components/molecules/tables/JobsTable";
import { BeekeepersService } from "@/services/beekeepersService/service";
import { JobsStatusFilter } from "@/services/JobsService/dtos";
import { JobsService } from "@/services/JobsService/service";
import { Pageable } from "@/types";
import { Beekeeper, Job } from "@/types/entitysType";
import { Card, Flex, Radio } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewBeekeeperPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [resourceLoading, setResourceLoading] = useState(false);
  const [resource, setResource] = useState<Beekeeper>();
  const [jobsResource, setJobsResource] = useState<Pageable<Job>>();
  const [jobStatus, setJobStatus] = useState<JobsStatusFilter>(
    JobsStatusFilter.ALL
  );

  const [page, setPage] = useState(0);

  const { id } = useParams();

  const fetchResource = async (resourceId: string) => {
    setResourceLoading(true);
    try {
      const { data } = await BeekeepersService.getById(resourceId);
      setResource(data);
    } catch (error) {
      console.error("fetchResource [ViewBeekeeperPage]", error);
    } finally {
      setResourceLoading(false);
    }
  };

  const fetchJobsResource = async (beekeeperId: string, page: number) => {
    setLoading(true);

    try {
      const { data } = await JobsService.getBeekeeperPage(beekeeperId, page, {
        status: jobStatus,
      });
      setJobsResource(data);
    } catch (error) {
      console.error("fetchJobsResource [ViewBeekeeperPage]", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (resource?.id) fetchJobsResource(resource.id, page);
  }, [resource, page, jobStatus]);

  useEffect(() => {
    if (id) fetchResource(id);
  }, [id]);

  return (
    <div className=" flex flex-col gap-4">
      <LoadingContent isLoading={resourceLoading} />

      <Card title="Histórico de serviços">
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
            dataSource={jobsResource?.content ?? []}
            pagination={false}
            loading={loading}
            noBeekeeper={true}
          />
          <BasePagination
            page={page}
            setPage={setPage}
            pageable={jobsResource}
          />
        </Flex>
      </Card>
    </div>
  );
};
