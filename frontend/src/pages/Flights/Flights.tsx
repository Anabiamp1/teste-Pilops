import { useEffect, useRef, useState } from "react";
import { getFlights } from "../../services/flights";
import { FlightsCard } from "../../components/FlightsCard/FlightsCard";
import type { FlightInicio } from "../../types/FlightInicio";
import styles from "./styles.module.css";


export function Flights() {
  const [flights, setFlights] = useState<FlightInicio[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    loadFlights();
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading && hasMore) {
          loadFlights();
        }
      },
      {
        threshold: 1,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [loading, hasMore]);

  async function loadFlights() {
    if (loading || !hasMore) return;

    setLoading(true);

    const response = await getFlights(page, 10);

    setFlights((prev) => {
      const existingIds = new Set(prev.map((f) => f.id));
      const newFlights = response.data.filter(
        (f) => !existingIds.has(f.id)
      );
      return [...prev, ...newFlights];
    });

    if (page >= response.totalPages) {
      setHasMore(false);
    } else {
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1 className={styles.label}>Histórico de Voos</h1>
      <p className={styles.label1}>Visualize seu histórico completo de voos realizados</p>

      {flights.map((flight) => (
        <FlightsCard key={flight.id} flight={flight} />
      ))}



      {/* scrool infinito */}

      <div ref={loadMoreRef} style={{ height: 1 }} />

      {loading && <p>Carregando...</p>}
      {!hasMore && <p>Fim do histórico</p>}
    </div>
  );
}
