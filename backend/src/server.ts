import express from "express";
import cors from "cors";
import flightsRoutes from "./routes/flights";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/flights", flightsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(` API rodando em http://localhost:${PORT}`);
});
