import apiClient from "./apiClient";

export async function getUsers() {
  try {
    const { data } = await apiClient.get("/users");
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getUser({ id }) {
  try {
    const { data } = await apiClient.get(`/users/${id}`);
    return data;
  } catch (e) {
    return console.error(e);
  }
}

export async function patchUser({ id, payload }) {
  try {
    const { data } = await apiClient.post(`/users/${id}`, { ...payload });
    return data;
  } catch (e) {
    return console.error(e);
  }
}

export async function createUser({ payload }) {
  try {
    const { data } = await apiClient.post(`/users`, { ...payload });
    return data;
  } catch (e) {
    return console.error(e);
  }
}

export async function deleteUser({ id }) {
  try {
    const { data } = await apiClient.post(`/users/${id}`);
    return data;
  } catch (e) {
    return console.error(e);
  }
}
