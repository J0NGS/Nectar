import { ResponseDTO } from "@/types";
import { GenericService } from "../genericService/genericService";

class beekeepersService extends GenericService {
    disableBeekeeper = async <T>(beekeeperId:string, data:"ACTIVE" | "INACTIVE") => {
        const res = await this.getApi().put<ResponseDTO<T>,String>(`${this.getURL()}/${beekeeperId}/status`, data);
        return res;
    }
}

export const BeekeepersService = new beekeepersService("/beekeepers");
