import { init } from "../redux/reducers/chatSlice";
import { Chat } from "../types/chatType";
import request from "./requestService";

export default async function getChats(makeRequest: boolean) : Promise<{data: Chat[]}> {
  return await request<{data: Chat[]}>("GET", "https://reqres.in/api/unknown", {}, {}, false, "chat", init, makeRequest)
}