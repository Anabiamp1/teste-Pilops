import logopilops from "../../assets/logopilops.svg";
import styles from "./styles.module.css";


{/* Logo Pilops */}


export function Header() {
  return (
  <div className={styles.container}>
  <img src={logopilops} alt="Logo Pilops" />
  </div>  
  );
}
