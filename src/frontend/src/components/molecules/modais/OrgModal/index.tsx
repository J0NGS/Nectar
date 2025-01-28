import { UserForm } from "@/components/organisms/UserForm";
import { AuthContext } from "@/contexts/AuthContext";
import { UserService } from "@/services/userService/service";
import { UserEdit, UserType } from "@/types";
import { User } from "@/types/authTypes";
import { Button, Flex, Form, Modal } from "antd";
import { useContext, useState } from "react";
import { OrgDescription } from "../../Descriptions/OrgDescription";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData?: User;
  reload?: () => Promise<void>;
}
export const OrgModal = ({ isOpen,onClose,initialData,reload }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [form] = Form.useForm<UserType>();
    const { user } = useContext(AuthContext);
    console.log(user?.role)
    const initialValues = {
        name: initialData?.profile?.name,
        email: initialData?.auth?.username,
        phone: initialData?.profile?.phone,
        document: initialData?.profile?.document,
    }

    console.log("initialValues", initialData);

    const update = async (data: UserType) => {
        const updateUser: UserEdit = {
                name: data.name,
                phone: data.phone,
                document: data.document,
                email: data.username,
                password: data.password,
        }


        try {
        setLoading(true);
        await UserService.updateUser(user?.id as string, updateUser);
        await reload?.();
        closeModal();
        } catch (error) {
        console.error("update Jobs", error);
        } finally {
        setLoading(false);
        }
    };
    
    const submit = async () => {
        const formValue = form.getFieldsValue();
        console.log("formValue", formValue);
        if (initialData?.id) update(formValue);
        closeModal();
    };
    
    const closeModal = () => {
        form.resetFields();
        onClose();
    };

    return (
        <Modal
        title={editMode ? "Editar Organização" : "Organização"}
        open={isOpen}
        confirmLoading={loading}
        onCancel={closeModal}
        onOk={submit}
        footer={null}
        >
            {editMode ?
            <>
                <UserForm form={form} layout="vertical" initialValues={initialValues} withAuth/>
                <Flex align="center" gap={10} className="w-full justify-end">
                    <Button type="primary" onClick={submit} loading={loading}>Salvar</Button>
                    <Button onClick={() => setEditMode(false)}>Cancelar</Button>
                </Flex>
            </> :
            <>
                <OrgDescription data={initialValues}
                />
                <Flex align="center" gap={10} className="w-full justify-end mt-3">
                    {user?.role === "ROLE_ORG" && 
                    <Button type="primary" onClick={() => setEditMode(true)}>Editar</Button>}
                    <Button onClick={closeModal}>Cancelar</Button>
                </Flex>
            </>
            }
        </Modal>
    );
};

