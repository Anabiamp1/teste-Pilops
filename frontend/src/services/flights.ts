/* LISTAGEM DE VOOS COM PAGINAÇÃO */
export async function getFlights(page = 1, limit = 10) {
  const response = await fetch(
    `http://localhost:3000/flights?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar voos");
  }

  return response.json();
}

/* DETALHES DE UM VOO */
export async function getFlightById(id: string) {
  const response = await fetch(
    `http://localhost:3000/flights/${id}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar voo");
  }

  return response.json();
}
