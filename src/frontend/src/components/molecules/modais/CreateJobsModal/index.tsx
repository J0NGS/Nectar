import { useEffect, useState } from "react";

import { Flex, Form, Modal, Typography } from "antd";

import { LoadingContent } from "@/components/atoms/LoadingContent";

import { Job } from "@/types/entitysType";
import { CreateJobDTO, PostProcessingDTO } from "@/services/JobsService/dtos";
import { JobsService } from "@/services/JobsService/service";
import { JobForm } from "@/components/organisms/JobForm";
import { PostProcessingForm } from "@/components/organisms/PostProcessingForm";
import { validateFormIsEmpty } from "@/utils/validations";
import dayjs from "dayjs";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Job;
  reload?: () => Promise<void>;
}

export const CreateJobsModal = ({
  isOpen,
  onClose,
  initialData,
  reload,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm<CreateJobDTO>();
  const [postProcessingForm] = Form.useForm<PostProcessingDTO>();

  const create = async (data: CreateJobDTO) => {
    try {
      setLoading(true);
      const res = JobsService.create(data);
      await reload?.();
      closeModal();
    } catch (error) {
      console.error("create Jobs", error);
    } finally {
      setLoading(false);
    }
  };

  const update = async (id: string, data: CreateJobDTO) => {
    try {
      setLoading(true);
      await JobsService.update(id, data);
      await reload?.();
      closeModal();
    } catch (error) {
      console.error("update Jobs", error);
    } finally {
      setLoading(false);
    }
  };

  const submit = async () => {
    const data = form.getFieldsValue();
    const postProcessingValue = postProcessingForm.getFieldsValue();

    const formValue = {
      ...data,
      weight: data.weight * 100,
    };

    if (validateFormIsEmpty(postProcessingValue)) {
      const postProcessing = {
        ...postProcessingValue,
        postProcessingWeight: postProcessingValue.postProcessingWeight!! * 100,
        postProcessingRevenue:
          postProcessingValue.postProcessingRevenue!! * 100,
        waste: postProcessingValue.waste!! * 100,
      };

      formValue.postProcessing = postProcessing;
    }

    if (initialData?.id) update(initialData.id, formValue);
    else create(formValue);
    closeModal();
  };

  const closeModal = () => {
    form.resetFields();
    onClose();
  };

  useEffect(() => {
    if (initialData) {
      const formValue: CreateJobDTO = {
        ...initialData,
        beekeeperId: initialData.beekeeper?.id!!,
        startAt: dayjs(initialData.startAt!!),
      };

      form.setFieldsValue(formValue);
    }
  }, [initialData]);

  return (
    <Modal
      title={`${initialData ? "Editar" : "Adicionar"} Serviço`}
      open={isOpen}
      onOk={submit}
      onClose={closeModal}
      onCancel={closeModal}
      okText="Salvar"
      width={1000}
    >
      <LoadingContent isLoading={loading} />

      <Flex gap={15} vertical className="mt-5">
        <JobForm form={form} />
        <Typography.Title level={5}>
          Pós-processamento{" "}
          <span className="text-sm font-normal">(Opcional)</span>
        </Typography.Title>
        <PostProcessingForm form={postProcessingForm} />
      </Flex>
    </Modal>
  );
};
