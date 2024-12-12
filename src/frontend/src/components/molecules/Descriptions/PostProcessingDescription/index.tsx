import { PostProcessingDTO } from "@/services/JobsService/dtos";
import { Descriptions } from "antd";

interface PostProcessingDescriptionProps {
  postProcessing: PostProcessingDTO;
}

export const PostProcessingDescription: React.FC<
  PostProcessingDescriptionProps
> = ({ postProcessing }) => {
  return (
    <Descriptions
      title="Pós-Processamento"
      layout="vertical"
      bordered
      column={{ xxl: 4, xl: 3, lg: 2, md: 1, sm: 1, xs: 1 }}
    >
      {postProcessing.postProcessingBales !== undefined && (
        <Descriptions.Item label="Fardos Pós-Processamento">
          {postProcessing.postProcessingBales}
        </Descriptions.Item>
      )}
      {postProcessing.postProcessingWeight !== undefined && (
        <Descriptions.Item label="Peso Pós-Processamento">
          {(postProcessing.postProcessingWeight / 100).toFixed(2)} kg
        </Descriptions.Item>
      )}
      {postProcessing.postProcessingRevenue !== undefined && (
        <Descriptions.Item label="Arrecadado">
          {(postProcessing.postProcessingRevenue / 100).toFixed(2)} kg
        </Descriptions.Item>
      )}
      {postProcessing.waste !== undefined && (
        <Descriptions.Item label="Peso Desperdiçado">
          {(postProcessing.waste / 100).toFixed(2)} kg
        </Descriptions.Item>
      )}
    </Descriptions>
  );
};
