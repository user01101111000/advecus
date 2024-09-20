import getAxiosInstance from "../api/axios_instance";

export default async function fetchAdvice() {
  try {
    const { data } = await getAxiosInstance().get();

    const { id, advice } = data.slip;

    return { id, advice };
  } catch (error) {
    console.log(error);
  }
}
