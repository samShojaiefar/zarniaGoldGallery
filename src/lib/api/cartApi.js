import axiosInstance from "../services/axiosInstance";


export async function addToCart(productSlug) {
  try {
    const response = await axiosInstance.get(`/shopping_cart/plus/${productSlug}`);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}
export async function miunsProduct(productSlug) {
  try {
    const response = await axiosInstance.get(`/shopping_cart/minus/${productSlug}`);
    return response.data;
  } catch (error) {
    console.error("Error reducing product quantity:", error);
    throw error;
  }
}
export async function removeProduct(productSlug) {
  try {
    const response = await axiosInstance.get(`/shopping_cart/remove/${productSlug}`);
    return response.data;
  } catch (error) {
    console.error("Error reducing product quantity:", error);
    throw error;
  }
}
export async function addToFavorite(productSlug) {
  try {
    const response = await axiosInstance.get(`/favorite_products/${productSlug}`);
    return response.data;
  } catch (error) {
    console.error("Error adding to favorite:", error);
    throw error;
  }
}

export async function getCartItems() {
  try {
    const response = await axiosInstance.get("/shopping_cart");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
}