import apiClient from "./apiClient";

export async function login({ email, password }) {
  apiClient
    .post("/users/login", { email, password })
    .then(data => console.log(data))
    .catch(e => console.warn(e));
}

export async function logout() {
  return {};
}
