import { Login } from "../types/loginType";
import request from "./requestService";

export default async function login(body: object) : Promise<Login> {
  return await request<Login>("POST", "https://dummyjson.com/auth/login", body, {}, false, undefined, undefined, true)
}