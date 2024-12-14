import { LoadingContent } from "@/components/atoms/LoadingContent";
import { JobsService } from "@/services/JobsService/service";
import { Job } from "@/types/entitysType";
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
    <div>
      <LoadingContent isLoading={resourceLoading} /> {resource?.productType}
    </div>
  );
};
