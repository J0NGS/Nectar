import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

type FieldType = {
  username: string;
  password: string;
  remember?: boolean;
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fakeLogin = {
    username: "admin@admin.com",
    password: "admin",
  }

  const loginUser = async (credentials: FieldType) => {
    setLoading(true);
    
    if(credentials.username !== fakeLogin.username || credentials.password !== fakeLogin.password) {
        setTimeout(() => {
            setLoading(false);
            toast.error("Usuário ou senha incorretos");
        }, 2000);
    }else{
        setTimeout(() => {
            setLoading(false);
            toast.success("Usuário logado com sucesso!");
            navigate("/produtor");
        }, 2000);
    } 
    console.log(credentials);
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            prefix={<LockOutlined />}
          />
      </Form.Item>
      <Form.Item 
        name="remember" 
        valuePropName="checked"
        noStyle
      >
        <Checkbox
            checked={remember}
            onClick={() => setRemember(!remember)}
            id="remember"
            
          >Lembrar de mim</Checkbox>
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

export default LoginForm;
