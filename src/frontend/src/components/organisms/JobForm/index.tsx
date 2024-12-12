import { CreateJobDTO } from "@/services/JobsService/dtos";
import { FormProps } from "antd";
import { SelectSearchInput } from "@/components/atoms/Inputs/SelectSearchInput";
import { WaxColorSchema } from "@/components/atoms/WaxColorSchema";
import { booleanSelectOptions, produtcTypeOptions } from "@/utils/utils";
import { Col, DatePicker, Form, Input, InputNumber, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { Beekeeper } from "@/types/entitysType";
import { handleError } from "@/utils/handleError";
import { BeekeepersService } from "@/services/beekeepersService/service";
import { InputMoney } from "@/components/atoms/Inputs/InputMoney";
import TextArea from "antd/es/input/TextArea";

interface JobFormProps extends FormProps<CreateJobDTO> {}

export const JobForm = ({ ...rest }: JobFormProps) => {
  const [beekeepers, setBeekeepers] = useState<Beekeeper[]>([]);

  const fetchBeekeepers = async () => {
    try {
      const { data } = await BeekeepersService.get();
      setBeekeepers(data);
    } catch (e) {
      handleError({ e });
    }
  };

  useEffect(() => {
    fetchBeekeepers();
  }, []);

  return (
    <Form layout="vertical" {...rest}>
      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 12 }}>
          <Form.Item
            name="beekeeperId"
            label="Apicultor"
            rules={[
              {
                required: true,
                message: "Selecione um apicultor",
              },
            ]}
          >
            <SelectSearchInput
              placeholder="Selecione um apicultor"
              options={beekeepers.map((item) => {
                return {
                  label: item.profile?.name,
                  value: item.id,
                };
              })}
            />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Produto"
            name={"productType"}
            key={"productType"}
            id="productType"
            initialValue={"WAX"}
          >
            <Select options={produtcTypeOptions} />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Origem"
            name={"origin"}
            key={"origin"}
            id="origin"
            rules={[
              {
                required: true,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <Input placeholder="Origem do produto" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Data inicio"
            name={"startAt"}
            key={"startAt"}
            id="startAt"
            rules={[
              {
                required: true,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <DatePicker
              format={"DD/MM/YYYY"}
              style={{ width: "100%" }}
              placeholder="Data de inicio"
            />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Aparência"
            name={"appearance"}
            key={"appearance"}
            id="appearance"
            rules={[
              {
                required: true,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <Input placeholder="Aparência do produto" />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Pesticidas"
            name={"pesticides"}
            key={"pesticides"}
            id="pesticides"
            initialValue={false}
          >
            <Select options={booleanSelectOptions} />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Perda de enxame"
            name={"hiveLoss"}
            key={"hiveLoss"}
            id="hiveLoss"
            initialValue={false}
          >
            <Select options={booleanSelectOptions} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Cheiro"
            name={"scent"}
            key={"scent"}
            id="scent"
            rules={[
              {
                required: true,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <Input placeholder="Cheiro do produto" />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Quantidade de fardos"
            name={"quantityOfBales"}
            key={"quantityOfBales"}
            id="quantityOfBales"
            rules={[
              {
                required: true,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              placeholder="Qtd. Fardos recebidos"
            />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Peso total"
            name={"weight"}
            key={"weight"}
            id="weight"
            rules={[
              {
                required: true,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <InputMoney placeholder="Peso total recebido" unit="Kg" />
          </Form.Item>
        </Col>
        <Col span={24} md={{ span: 6 }}>
          <Form.Item
            label="Cor"
            name={"color"}
            key={"color"}
            id="color"
            rules={[
              {
                required: true,
                message: "Campo obrigatório!",
              },
            ]}
          >
            <WaxColorSchema />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Observação"
        name={"observation"}
        key={"observation"}
        id="observation"
      >
        <TextArea rows={1} />
      </Form.Item>
    </Form>
  );
};
