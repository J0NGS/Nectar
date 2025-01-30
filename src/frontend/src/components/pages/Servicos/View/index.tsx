import { LoadingContent } from "@/components/atoms/LoadingContent";
import { ToBack } from "@/components/atoms/ToBack";
import { JobDescription } from "@/components/molecules/Descriptions/JobDescription";
import { PostProcessingDescription } from "@/components/molecules/Descriptions/PostProcessingDescription";
import { JobsService } from "@/services/JobsService/service";
import { Job } from "@/types/entitysType";
import { Card, Flex } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewJobPage: React.FC = () => {
  const [resourceLoading, setResourceLoading] = useState(false);
  const [resource, setResource] = useState<Job>();

  const { id } = useParams();

  const fetchResource = async (resourceId: string) => {
    setResourceLoading(true);
    try {
      const { data } = await JobsService.getById(resourceId);
      setResource(data);
    } catch (error) {
      console.error("fetchResource [ViewJobPage]", error);
    } finally {
      setResourceLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchResource(id);
  }, [id]);

  return (
    <>
      <LoadingContent isLoading={resourceLoading} />

      <Flex gap={20} vertical>
        <ToBack />
        <Card>
          <JobDescription job={resource} />
        </Card>

        {resource?.postProcessingBales && (
          <Card>
            <PostProcessingDescription
              postProcessing={{
                postProcessingBales: resource?.postProcessingBales,
                postProcessingRevenue: resource?.postProcessingRevenue,
                postProcessingWeight: resource?.postProcessingWeight,
                waste: resource?.waste,
              }}
            />
          </Card>
        )}
      </Flex>
    </>
  );
};
