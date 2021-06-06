import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const SubscribeAPI = {
  subscribe: function (details) {
    return axiosInstance.request({
      method: "POST",
      url: `/api/subscribe/`,
      data: details,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getAll: function () {
    return axiosInstance.request({
      method: "GET",
      url: `/api/subscribe`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
