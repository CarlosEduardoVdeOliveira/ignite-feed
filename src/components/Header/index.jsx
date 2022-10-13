import styles from "./styles.module.css";
import logo from '../../assets/ignite-feed-logo.svg'
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do ignite feed" />
      {/* <strong>Ignite Feed</strong> */}
    </header>
  );
}
