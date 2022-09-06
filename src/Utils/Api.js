import moment from "moment";
const API_URL = "https://challenge.thef2e.com/api/thef2e2019/stage6";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

export const getRooms = () => {
  return fetch(`${API_URL}/rooms`, {
    method: "GET",
    headers,
  }).then((res) => res.json());
};

export const getRoom = (id) => {
  return fetch(`${API_URL}/room/${id}`, {
    method: "GET",
    headers,
  }).then((res) => res.json());
};

// export const reserveRoom = (id, name, tel, start, end) => {
//   const date = [];
//   const data = { name, tel, date };
//   let totalDay = end.diff(start, "days") + 1;
//   for (let i = 0; i < totalDay; i++) {
//     date.push(moment(start).add(i, "days").format("Y-MM-DD"));
//   }
//   return fetch(`${API_URL}/room/${id}`, {
//     method: "POST",
//     headers,
//     body: JSON.stringify(data),
//   }).then((res) => res.json());
// };
export const reserveRoom = (id, body) => {
  return fetch(`${API_URL}/room/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

export const deleteAllReserver = () => {
  return fetch(`${API_URL}/rooms`, {
    method: "DELETE",
    headers,
  }).then((res) => res.json());
};
