export interface Route {
  from: string;
  to: string;
}

export interface FlightData {
  date: string;
  balance: number;
  xp: number;
  missionBonus: number;
  route: Route;
}

export interface Aircraft {
  name: string;
  registration: string;
}

export interface Flight {
  id: string;
  aircraft: Aircraft;
  flightData: FlightData;
}

export interface FlightsResponse {
  data: Flight[];
  page: number;
  totalPages: number;
}
