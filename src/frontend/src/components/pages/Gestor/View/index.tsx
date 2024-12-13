import { ManagerService } from "@/services/managerService/service";
import { Manager } from "@/types/entitysType";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewManagerPage: React.FC = () => {
  const [resource, setResource] = useState<Manager>();

  const { id } = useParams();

  const fetchResource = async (resourceId: string) => {
    const { data } = await ManagerService.getById(resourceId);
    setResource(data);
  };

  useEffect(() => {
    if (id) fetchResource(id);
  }, [id]);

  return <div>{resource && <>{resource.user?.profile?.name}</>}</div>;
};
