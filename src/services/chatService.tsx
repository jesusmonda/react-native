import { init } from "../redux/reducers/chatSlice";
import { Chat } from "../types/chatType";
import request from "./requestService";

export default async function getChats(makeRequest: boolean) : Promise<Chat[]> {
  return await request<Chat[]>("GET", "https://reqres.in/api/unknown", {}, {}, false, "chat", init, makeRequest)
}