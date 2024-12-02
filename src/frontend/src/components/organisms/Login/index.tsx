import LoginForm from "../../molecules/LoginForm";

const Login = () => {
  return (
    <>
      <div className="h-screen flex">
        <div className="flex flex-col justify-center my-auto mx-auto p-6 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/3  ">
          <h1 className="font-bold text-3xl">Bem vindo(a) de volta!</h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
