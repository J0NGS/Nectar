// Importe outras páginas aqui

import { LoginPage } from "./components/pages/Login";

interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  { path: "/login", component: LoginPage },
  // Adicione outras rotas aqui
];

export default routes;
