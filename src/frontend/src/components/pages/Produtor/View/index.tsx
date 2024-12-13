import { BeekeepersService } from "@/services/beekeepersService/service";
import { Beekeeper } from "@/types/entitysType";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewBeekeeperPage: React.FC = () => {
  const [resource, setResource] = useState<Beekeeper>();

  const { id } = useParams();

  const fetchResource = async (resourceId: string) => {
    const { data } = await BeekeepersService.getById(resourceId);
    setResource(data);
  };

  useEffect(() => {
    if (id) fetchResource(id);
  }, [id]);

  return <div>{resource && <>{resource.profile?.name}</>}</div>;
};
