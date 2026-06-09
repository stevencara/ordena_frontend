const API_URL = import.meta.env.VITE_API_URL;


// Servicio para obtener todos los usuarios
export const getUsers = async () => {
  const response = await fetch(
    `${API_URL}/users`
  );

  if (!response.ok) {
    throw new Error("Error obteniendo usuarios en API");
  }

  return response.json();

};


// Servicio para crear un usuario
export const createUser = async (product) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error creando usuario");
  }

  return response.json();
};


// Servicio para actualizar un usuario
export const updateUser = async (id, product) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error actualizando usuario");
  }

  return response.json();
};


// Servicio para eliminar un usuario
export const deleteUser = async (id) => {
  console.log(id)
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error eliminando usuario");
  }
}