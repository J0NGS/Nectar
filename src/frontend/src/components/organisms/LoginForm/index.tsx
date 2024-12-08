import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LoginType } from "@/types";

export const LoginForm = () => {
  const [remember, setRemember] = useState(true);
  const [form] = Form.useForm<LoginType>();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (values: LoginType) => {
    setLoading(true);

    try {
      toast.success("Usuário logado com sucesso!");
      navigate("/produtor");
    } catch (error) {
      console.error("loginUser", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      className="mt-10 w-full"
      name="login"
      initialValues={{ remember: true }}
      onFinish={loginUser}
      layout="vertical"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Nenhum campo pode ficar vazio" }]}
        label="E-mail"
        layout="vertical"
      >
        <Input
          className="rounded-md"
          size="large"
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          prefix={<UserOutlined />}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Nenhum campo pode ficar vazio" }]}
        label="Senha"
        layout="vertical"
      >
        <Input.Password
          className="rounded-md"
          id="password"
          type="password"
          placeholder="Digite sua senha"
          size="large"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox checked={remember} id="remember">
          Lembrar de mim
        </Checkbox>
      </Form.Item>

      <Form.Item className="mt-4">
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          block
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
};
