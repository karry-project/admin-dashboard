import apiClient from "./apiClient";

export async function login({ email, password }) {
  await apiClient
    .post("/users/login", { email, password })
    .then(({ headers, status }) => {
      localStorage.setItem("token", headers["x-auth"]);
      return status;
    })
    .catch(e => console.warn(e));
}

export async function logout() {
  localStorage.removeItem("token");
  return {};
}

export function getToken() {
  return localStorage.getItem("token");
}
