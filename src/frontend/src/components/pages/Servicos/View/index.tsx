import { JobsService } from "@/services/JobsService/service";
import { Job } from "@/types/entitysType";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewJobPage: React.FC = () => {
  const [resource, setResource] = useState<Job>();

  const { id } = useParams();

  const fetchResource = async (resourceId: string) => {
    const { data } = await JobsService.getById(resourceId);
    setResource(data);
  };

  useEffect(() => {
    if (id) fetchResource(id);
  }, [id]);

  return <div>{resource && <>{resource.productType}</>}</div>;
};
