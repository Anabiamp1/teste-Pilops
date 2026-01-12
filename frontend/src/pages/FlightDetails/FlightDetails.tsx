import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFlightById } from "../../services/flights";
import type { FlightDetails } from "../../types/FlightDetails";
import styles from "./styles.module.css";

import arrow from "../../assets/arrow.svg";
import trophy from "../../assets/trophy.svg";
import coin from "../../assets/coin.svg";
import star from "../../assets/star.svg";
import award from "../../assets/award.svg";
import group from "../../assets/group.svg";

export function FlightDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [flight, setFlight] = useState<FlightDetails | null>(null);

  useEffect(() => {
    if (id) {
      getFlightById(id).then(setFlight);
    }
  }, [id]);

  if (!flight) {
    return <p style={{ color: "white" }}>Carregando...</p>;
  }

  return (
    <div className={styles.container}>
      {/* Botão voltar */}
      <button className={styles.back} onClick={() => navigate(-1)}>
        <img src={arrow} alt="Voltar" className={styles.arrow} />
        Detalhes do voo
      </button>

      {/* Recompensas */}
      <div className={styles.rewards}>
        <div className={styles.rewardsHeader}>
          <img src={trophy} alt="Recompensas" className={styles.trophy} />
          <p className={styles.rewardsTitle}>Recompensas</p>
        </div>

        <div className={styles.rewardsGrid}>
          {/* Ganhos totais */}
          <div className={styles.rewardBlock}>
            <img src={coin} alt="Ganhos" className={styles.rewardIconBig} />
            <div className={styles.rewardText}>
              <span className={styles.labelUpper}>Ganhos totais</span>
              <strong
                className={
                  flight.flightData.balance >= 0
                    ? styles.positive
                    : styles.negative
                }
              >
                {flight.flightData.balance.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>
          </div>

          {/* XP */}
          <div className={styles.rewardBlock}>
            <img src={star} alt="XP" className={styles.rewardIcon} />
            <div className={styles.rewardText}>
              <span className={styles.labelUpper}>XP CONQUISTADO</span>
              <strong>{flight.flightData.xp}</strong>
            </div>
          </div>

          {/* Bônus */}
          <div className={styles.rewardBlock}>
            <img src={award} alt="Bônus" className={styles.rewardIcon} />
            <div className={styles.rewardText}>
              <span className={styles.labelUpper}>Bônus de missão</span>
              <strong>{flight.flightData.missionBonus * 100}%</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Card do voo */}
      <div className={styles.card}>
        {/* Coluna 1 */}
        <div className={styles.aircraft}>
          <strong>{flight.aircraft.name}</strong>
          <span>{flight.aircraft.airline}</span>
        </div>

        {/* Coluna 2 – Trajeto */}
        <div className={styles.routeColumn}>
          <span className={styles.labelUpper1}>Trajeto</span>
          <img src={group} alt="Trajeto" className={styles.routeIcon} />
          <div className={styles.routeCodes}>
            <span>{flight.flightData.route.from}</span>
            <span>{flight.flightData.route.to}</span>
          </div>
        </div>

        {/* Coluna 3 */}
        <div className={styles.infoCenter}>
          <span className={styles.labelUpper2}>Matrícula</span>
          <strong>{flight.aircraft.registration}</strong>
        </div>

        {/* Coluna 4 */}
        <div className={styles.infoCenter}>
          <span className={styles.labelUpper2}>Data</span>
          <strong>
            {new Date(flight.flightData.date).toLocaleDateString("pt-BR")}
          </strong>
        </div>
      </div>
    </div>
  );
}
