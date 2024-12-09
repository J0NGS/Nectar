import { useEffect, useState } from "react";

import { Form, Modal, Typography } from "antd";

import { LoadingContent } from "@/components/atoms/LoadingContent";

import { Job } from "@/types/entitysType";
import { CreateJobDTO, PostProcessingDTO } from "@/services/JobsService/dtos";
import { JobsService } from "@/services/JobsService/service";
import { PostProcessingForm } from "@/components/organisms/PostProcessingForm";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData: Job;
  reload?: () => Promise<void>;
}

export const PostProcessingModal = ({
  isOpen,
  onClose,
  initialData,
  reload,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [postProcessingForm] = Form.useForm<PostProcessingDTO>();

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
    const postProcessingValue = postProcessingForm.getFieldsValue();

    console.log("postProcessingValue", postProcessingValue);

    const formValue: CreateJobDTO = {
      ...initialData,
      beekeeperId: initialData.beekeeper?.id!!,
      startAt: initialData.startAt!!,
      postProcessing: postProcessingValue,
    };

    if (initialData?.id) update(initialData.id, formValue);

    closeModal();
  };

  const closeModal = () => {
    postProcessingForm.resetFields();
    onClose();
  };

  return (
    <Modal
      title={`Adicionar Pós-processamento`}
      open={isOpen}
      onOk={submit}
      onClose={closeModal}
      onCancel={closeModal}
      okText="Salvar"
      width={1000}
    >
      <LoadingContent isLoading={loading} />\
      <PostProcessingForm form={postProcessingForm} isRequired />
    </Modal>
  );
};
