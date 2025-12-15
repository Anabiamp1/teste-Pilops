import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Flights } from "./pages/Flights/Flights";
import { FlightDetails } from "./pages/FlightDetails/FlightDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={<FlightDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
