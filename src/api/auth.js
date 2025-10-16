import client from "./client";

export const loginUser = async (data) => {
  const res = await client.post("/auth/login", data);
  return res.data;
};
export const currentUser = async (token) => {
  const res = await client.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

