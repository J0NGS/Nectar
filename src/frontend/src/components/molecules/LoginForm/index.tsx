import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";

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
        }, 2000);
    } 
    console.log(credentials);
  };

  return (
    <Form
      className="flex flex-col mt-10 w-full"
      name="login"
      initialValues={{ remember: true }}
      onFinish={loginUser}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Nenhum campo pode ficar vazio" }]}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <Input
            className="h-10 rounded-md"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Nenhum campo pode ficar vazio" }]}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-sm font-medium">
            Senha
          </label>
          <Input.Password
            className="h-10 rounded-md"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <div className="flex items-center gap-1">
          <Checkbox
            checked={remember}
            onClick={() => setRemember(!remember)}
            id="remember"
            className="h-4 w-4 "
          />
          <label htmlFor="remember">Lembrar de mim</label>
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
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
