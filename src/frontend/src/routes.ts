import LoginPage from "./pages/login";
// Importe outras páginas aqui

interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  { path: "/login", component: LoginPage },
  // Adicione outras rotas aqui
];

export default routes;
