import client from "./client";

export const fetchProducts = async () => {
  const res = await client.get("/products");
  return res.data.products;
};

export const fetchProductById = async (id) => {
  const res = await client.get(`/products/${id}`);
  return res.data;
};

export const fetchRelatedProducts = async (category, excludeId) => {
  const res = await client.get(`/products/category/${category}`);
  return res.data.products.filter((p) => p.id !== Number(excludeId));
};
