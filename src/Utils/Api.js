const API_URL = "https://challenge.thef2e.com/api/thef2e2019/stage6";
const headers = {
  "Content-Type": "application/json",
  Accept: 'application/json',
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

export const getRooms = () => {
  return fetch(`${API_URL}/rooms`, {
    method: "GET",
    headers,
  }).then(res=>res.json())
};

export const getRoom = (id) => {
  return fetch(`${API_URL}/room/${id}`, {
    method: "GET",
    headers,
    mode: "no-cors",
  }).then((res) => res.json());
};

export const reserveRoom = (id, body) => {
  return fetch(`${API_URL}/room/${id}`, {
    method: "POST",
    headers,
    body,
    mode: "no-cors",
  }).then((res) => res.json());
};

export const deleteAllReserver = () => {
  return fetch(`${API_URL}/rooms`, {
    method: "DELETE",
    headers,
    mode: "no-cors",
  }).then((res) => res.json());
};
