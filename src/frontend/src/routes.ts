import { ProdutorPage } from "./components/pages/Produtor";
import { LoginPage } from "./components/pages/Login";
import { ServicosPage } from "./components/pages/Servicos";
import { DashboardPage } from "./components/pages/Dashboard";
import { GestorPage } from "./components/pages/Gestor";

interface Route {
  path: string;
  component: React.FC;
}

interface RouteType {
  withTemplate: Route[];
  withoutTemplate: Route[];
}

export const routes: RouteType = {
  // Rotas com template
  withTemplate: [
    { path: "/produtor", component: ProdutorPage },
    { path: "/gestor", component: GestorPage },
    { path: "/servico", component: ServicosPage },
    { path: "/dashboard", component: DashboardPage },
  ],
  // Rotas sem template
  withoutTemplate: [{ path: "/login", component: LoginPage }],
};
