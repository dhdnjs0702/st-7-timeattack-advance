import { todoApi } from "../api/todos";

export const fetchDetail = async (id) => {
  try {
    const response = await todoApi.get(`/todos/${id}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchData = async () => {
  try {
    const response = await todoApi.get("/todos");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
