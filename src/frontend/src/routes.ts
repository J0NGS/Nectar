import { produtorPage } from "./components/pages/Produtor";
import { LoginPage } from "./components/pages/Login";

interface Route {
  path: string;
  component: React.FC;
}

interface Teste {
  withTemplate: Route[];
  withoutTemplate: Route[];
}

export const routes:Teste= {
  // Rotas com template
  withTemplate: [
    {path: "/produtor", component: produtorPage},
  ],
  // Rotas sem template
  withoutTemplate: [
    {path: "/login", component: LoginPage},
  ],
}
