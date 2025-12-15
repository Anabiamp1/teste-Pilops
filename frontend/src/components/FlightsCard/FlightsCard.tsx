import styles from "./styles.module.css";
import type { FlightSummary } from "../../types/FlightSummary";
import { useNavigate } from "react-router-dom";

import group from "../../assets/group.svg";

interface Props {
  flight: FlightSummary;
}

/* data BR */
function formatDateBR(date: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

export function FlightsCard({ flight }: Props) {
  const navigate = useNavigate();
  const isPositive = flight.balance >= 0;

  const [from, to] = flight.route.split(" → ");

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/flights/${flight.id}`)}
    >
      {/* Coluna 1 */}
      <div className={styles.aircraft}>
        <strong>{flight.aircraft}</strong>
        <span>{flight.airline}</span>
      </div>

      {/* Coluna 2 – Trajeto */}
      <div className={styles.routeColumn}>
        <img src={group} alt="Trajeto" className={styles.routeIcon} />
        <div className={styles.routeCodes}>
          <span>{from}</span>
          <span>{to}</span>
        </div>
      </div>

      {/* Coluna 3 */}
      <div className={styles.info}>
        <span className={styles.label}>Matrícula</span>
        <strong>{flight.registration}</strong>
      </div>

      {/* Coluna 4 */}
      <div className={styles.info}>
        <span className={styles.label}>Data</span>
        <strong>{formatDateBR(flight.date)}</strong>
      </div>

      {/* Coluna 5 */}
      <div className={styles.balance}>
        <span className={styles.label}>Saldo</span>
        <strong className={isPositive ? styles.positive : styles.negative}>
          {flight.balance.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
    </div>
  );
}
