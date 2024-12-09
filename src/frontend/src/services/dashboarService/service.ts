import { ResponseDTO } from "@/types";
import { GenericService } from "../genericService/genericService";
import { Graph, MonthlyBoard } from "./dtos";

class dashboarService extends GenericService {
  monthlyGraph = async (month: Date) => {
    const res = await this.getApi().get<ResponseDTO<Graph>>(
      `${this.getURL()}/monthly/graph?month=${month}`
    );
    return res as ResponseDTO<Graph>;
  };

  monthlyBoard = async (month: Date) => {
    const res = await this.getApi().get<ResponseDTO<MonthlyBoard>>(
      `${this.getURL()}/monthly/board?month=${month}`
    );
    return res as ResponseDTO<MonthlyBoard>;
  };
}

export const DashboarService = new dashboarService("/dashboard");
