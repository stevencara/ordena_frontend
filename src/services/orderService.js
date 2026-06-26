const API_URL = import.meta.env.VITE_API_URL;


// Crear orden
export const createOrder = async (payload) => {

  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });


  if (!response.ok) {
    throw new Error("Error creando orden");
  }


  return response.json();
};



// Obtener orden
export const getOrderById = async (id) => {

  const response = await fetch(`${API_URL}/orders/${id}`);


  if (!response.ok) {
    throw new Error("Error obteniendo orden");
  }


  return response.json();

};



// Actualizar orden
export const updateOrder = async (id, payload) => {

  const response = await fetch(`${API_URL}/orders/${id}`, {
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(payload)
  });


  if (!response.ok) {
    throw new Error("Error actualizando orden");
  }


  return response.json();

};