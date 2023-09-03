import { BASE_URL } from "../config/settings";
import httpRequest from "../utils/httpRequest";


export const signIn = async (payload) => {
    return await httpRequest(`${BASE_URL}/membership/login`, "post", payload);
  };