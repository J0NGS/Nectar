import { LoginType, ResponseDTO } from "../types";
import { BaseApi } from "./baseAPI";
import { AbstractException } from "./handler/AbstractException";

const API = new BaseApi();

export class UserService {
  static async login({
    email,
    password,
  }: LoginType): Promise<ResponseDTO<any>> {
    const res = await API.postNoAuth("/user/login", {
      email,
      password,
    });

    if (res == undefined)
      throw new AbstractException("Alguma coisa aconteceu errado!");

    return res as ResponseDTO<any>;
  }
}
