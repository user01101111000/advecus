import axios from "axios";
import apiConfig from "./apiConfig";
async function fetchAdvice() {
  try {
    const response = await axios.get(apiConfig.url);

    const { id, advice } = response.data.slip;

    return { id, advice };
  } catch (error) {
    console.log(error);
  }
}

export default fetchAdvice;
