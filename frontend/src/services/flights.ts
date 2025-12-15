import type { FlightSummary } from "../../types/FlightSummary";

/* LISTAGEM COM PAGINAÇÃO */
export async function getFlights(
  page = 1,
  limit = 10
): Promise<{
  data: Flight[];
  page: number;
  totalPages: number;
}> {
  const response = await fetch(
    `http://localhost:3000/flights?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar voos");
  }

  return response.json();
}

/* Detalhes dos voos */
export async function getFlightById(id: string): Promise<Flight> {
  const response = await fetch(`http://localhost:3000/flights/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar voo");
  }

  return response.json();
}
