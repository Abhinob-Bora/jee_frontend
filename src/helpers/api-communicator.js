import axios from "axios";
const API = axios.create({ baseURL: `https://jee-backend.onrender.com/api` });
const token = localStorage.getItem("podstreamtoken");
export const loginUser = async (email, password) => {
  const res = await API.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (name, email, password) => {
  const res = await API.post("/user/signup", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await API.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message,token) => {
  const res = await API.post("/chat/new", { message }, { headers: { "Authorization" : `Bearer ${token}` }});
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async (token) => {
  const res = await API.get("/chat/all-chats", { headers: { "Authorization" : `Bearer ${token}` }});
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const deleteUserChats = async (token) => {
  const res = await API.delete("/chat/delete", { headers: { "Authorization" : `Bearer ${token}` }});
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await API.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
