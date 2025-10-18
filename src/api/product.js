import client from "./client";

export const fetchProducts = async () => {
  const res = await client.get("/products");
  return res.data.products;
};

export const fetchProductById = async (id) => {
  const res = await client.get(`/products/${id}`);
  return res.data;
};

export const fetchDiscountProducts = async (discountPerc) => {
  const res = await client.get("https://dummyjson.com/products");
  const products = res.data?.products || [];

  if (typeof discountPerc === "number") {
    if (discountPerc > 100) {
      return [...products].sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );
    }
    return products.filter((p) => p.discountPercentage >= discountPerc);
  }
  return products;
};

export const fetchRelatedProducts = async (category, excludeId) => {
  const res = await client.get(`/products/category/${category}`);
  return res.data.products.filter((p) => p.id !== Number(excludeId));
};
