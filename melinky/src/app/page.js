import styles from "./page.module.css";
import ShortenerForm from "../components/ShortenerForm/ShortenerForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Melinky</h1>
        <p className={styles.tagline}>Make your long links short.</p>
      </header>

      <div className={styles.content}>
        <ShortenerForm />
      </div>
    </div>
  );
}
