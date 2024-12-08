import { TableProdutor } from "../../../types/tableTypes";

export const dataSource = Array.from<TableProdutor>({length:46}).map((_, index) => ({
    id: index,
    nome: `João ${index}`,
    email: `joao${index}@email.com`,
    telefone: "999999999",
    responsableName: `Maria${index}`,
}));