import { Router, Request, Response } from "express";
import flightsData from "../flights.json";
import { Flight } from "../types/Flight";

const router = Router();
const flights = flightsData.flights as Flight[];

// GET Total-balance
router.get("/total-balance", (_req: Request, res: Response) => {
  const totalBalance = flights.reduce(
    (acc, flight) => acc + flight.flightData.balance,
    0
  );

  res.json({
    totalBalance: Number(totalBalance.toFixed(2))
  });
});


// GET Paginação

router.get("/", (req: Request, res: Response) => {

  //query params

  const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

  const start = (page - 1) * limit;
  const end = page * limit;
  const summary = flights.slice(start, end).map(flight => ({
    id: flight.id,

    aircraft: flight.aircraft.name,

    registration: flight.aircraft.registration,
    airline: flight.aircraft.airline,

    route: `${flight.flightData.route.from} → ${flight.flightData.route.to}`,

    balance: flight.flightData.balance,
    date: flight.flightData.date
  }));

  res.json({
    page,
    limit,
    total: flights.length,
    totalPages: Math.ceil(flights.length / limit),
    data: summary
  });
});

//GET Flights/:id 

router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  const flight = flights.find(flight => flight.id === id);

  if (!flight) {
    return res.status(404).json({ message: "Voo não encontrado" });
  }
  res.json(flight);
});

export default router;
