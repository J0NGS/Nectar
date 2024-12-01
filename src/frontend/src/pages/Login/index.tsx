import { Button, Input } from "antd";

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-center items-center my-auto mx-auto border p-6">
        <h1 className="font-bold text-3xl">Bem vindo(a) de volta!</h1>
        <div className="flex flex-col gap-3 mt-3 w-full">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <Input
              className="h-10"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Senha</label>
            <Input
              className="h-10"
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="flex items-center gap-1">
            <Input
              type="checkbox"
              value="false"
              id="remember"
              className="h-4 w-4"
            />
            <label htmlFor="remember">Lembrar de mim</label>
          </div>
          <Button type="primary">Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
