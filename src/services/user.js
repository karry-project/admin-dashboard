import apiClient from "./apiClient";

export function getUsers() {
  apiClient
    .get("/users")
    .then(data => data)
    .catch(e => console.warn(e));
}

export function getUser({ id }) {
  apiClient
    .get(`/users/${id}`)
    .then(data => data)
    .catch(e => console.warn(e));
}

export function patchUser({ id, payload }) {
  apiClient
    .post(`/users/${id}`, { ...payload })
    .then(data => data)
    .catch(e => console.warn(e));
}

export function createUser({ payload }) {
  apiClient
    .post(`/users`, { ...payload })
    .then(data => data)
    .catch(e => console.warn(e));
}

export function deleteUser({ id }) {
  apiClient
    .post(`/users/${id}`)
    .then(data => data)
    .catch(e => console.warn(e));
}
