import { PostProcessingDTO } from "@/services/JobsService/dtos";
import { FormProps } from "antd";
import { Col, Form, InputNumber, Row } from "antd";
import { InputMoney } from "@/components/atoms/Inputs/InputMoney";

interface Props extends FormProps<PostProcessingDTO> {
  isRequired?: boolean;
}

export const PostProcessingForm = ({ isRequired = false, ...rest }: Props) => {
  return (
    <Form layout="vertical" {...rest}>
      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Quantidade de fardos"
            name={"postProcessingBales"}
            key={"postProcessingBales"}
            id="postProcessingBales"
            rules={[
              {
                required: isRequired,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              placeholder="Qtd. de fardos entregues"
            />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Peso saída"
            name={"postProcessingWeight"}
            key={"postProcessingWeight"}
            id="postProcessingWeight"
            rules={[
              {
                required: isRequired,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <InputMoney
              placeholder="Pedo total saida"
              unit="Kg"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Arrecadado"
            name={"postProcessingRevenue"}
            key={"postProcessingRevenue"}
            id="postProcessingRevenue"
            rules={[
              {
                required: isRequired,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <InputMoney
              placeholder="Pedo total arrecadado"
              unit="Kg"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Desperdiçado"
            name={"waste"}
            key={"waste"}
            id="waste"
            rules={[
              {
                required: isRequired,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <InputMoney
              placeholder="Kg desperdiçado"
              unit="Kg"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
