import apiClient from "./apiClient";

export function getTrips() {
  apiClient
    .get("/trips")
    .then(data => console.log(data))
    .catch(e => console.warn(e));
}

export function getTrip({ id }) {
  apiClient
    .get(`/trips/${id}`)
    .then(data => console.log(data))
    .catch(e => console.warn(e));
}

export function patchTrip({ id, payload }) {
  apiClient
    .post(`/trips/${id}`, { ...payload })
    .then(data => console.log(data))
    .catch(e => console.warn(e));
}

export function createTrip({ payload }) {
  apiClient
    .post(`/trips`, { ...payload })
    .then(data => console.log(data))
    .catch(e => console.warn(e));
}

export function deleteTrip({ id }) {
  apiClient
    .post(`/trips/${id}`)
    .then(data => console.log(data))
    .catch(e => console.warn(e));
}
