import axios from "axios";
import { HouseDto } from "../app-common/types";
import { API_BASE } from "../app-common/constants";

const fetchHouses = async (): Promise<HouseDto[]> => {
  const response = await axios.get(API_BASE + "/Houses");
  return response.data;
};

export { fetchHouses };
