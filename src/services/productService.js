const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const response = await fetch(
    `${API_URL}/products`
  );

  if (!response.ok) {
    throw new Error("Error en API");
  }

  return response.json();

};



export const createProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error creando producto");
  }

  return response.json();
};



export const deleteProduct = async (id) => {
  console.log(id)
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error eliminando producto");
  }
}