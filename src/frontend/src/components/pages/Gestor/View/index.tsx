import { LoadingContent } from "@/components/atoms/LoadingContent";
import { ProfileWitchEmailDescription } from "@/components/molecules/Descriptions/ProfileWitchEmailDescription";
import { ManagerService } from "@/services/managerService/service";
import { Manager } from "@/types/entitysType";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewManagerPage: React.FC = () => {
  const [resourceLoading, setResourceLoading] = useState(false);
  const [resource, setResource] = useState<Manager>();

  const { id } = useParams();

  const fetchResource = async (resourceId: string) => {
    setResourceLoading(true);
    try {
      const { data } = await ManagerService.getById(resourceId);
      setResource(data);
    } catch (error) {
      console.error("fetchResource [ViewManagerPage]", error);
    } finally {
      setResourceLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchResource(id);
  }, [id]);

  return (
    <Card>
      <LoadingContent isLoading={resourceLoading} />
      <ProfileWitchEmailDescription
        tittle="Gestor"
        data={{
          ...resource?.user?.profile,
          owner: resource?.org,
          email: resource?.user?.auth?.username,
          status: resource?.user?.status,
        }}
      />
    </Card>
  );
};
