import { GenericService } from "../genericService/genericService";

class managerService extends GenericService {}

export const ManagerService = new managerService("/managers");
