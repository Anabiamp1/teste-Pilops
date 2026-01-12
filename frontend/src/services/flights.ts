const API_URL = "http://localhost:3000";
async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const text = await response.text();

  // Erro HTTP (404, 500, etc)
  if (!response.ok) {
    throw new Error(
      `Erro HTTP ${response.status} ao chamar ${url}. Resposta: ${text.slice(0, 200)}`
    );
  }

  // Tenta converter para JSON
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(
      `Resposta não é JSON. URL: ${url}. Início: ${text
        .slice(0, 120)
        .replace(/\s+/g, " ")}`
    );
  }
}

/**Busca a lista de voos com paginação */
export async function getFlights(page = 1, limit = 10) {
  const url = `${API_URL}/flights?page=${page}&limit=${limit}`;
  return fetchJson(url);
}

/**Busca os detalhes de um voo pelo ID */
export async function getFlightById(id: string) {
  const url = `${API_URL}/flights/${encodeURIComponent(id)}`;
  return fetchJson(url);
}
