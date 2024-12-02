import { Button, Form, Input } from "antd";

const LoginForm = () => {
  return (
    <Form className="flex flex-col mt-10 w-full">
      <Form.Item>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <Input
            className="h-10 rounded-md"
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>
      </Form.Item>
      <Form.Item>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-sm font-medium">
            Senha
          </label>
          <Input.Password
            className="h-10 rounded-md"
            id="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>
      </Form.Item>
      <Form.Item>
        <div className="flex items-center gap-1">
          <Input
            type="checkbox"
            value="false"
            id="remember"
            className="h-4 w-4 "
          />
          <label htmlFor="remember">Lembrar de mim</label>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" size="large" className="w-full">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
