"use client";

import styles from "./ResultCard.module.css";
import Button from "../Button/Button";

export default function ResultCard({ url }) {
  if (!url) {
    return null;
  }

  function handleCopy() {
    // Clipboard API integration is implemented in Step 11 (Copy functionality).
    // The button exists now purely as part of the Basic UI.
  }

  return (
    <div className={styles.card}>
      <p className={styles.label}>Your short link is ready</p>
      <div className={styles.row}>
        <span className={styles.url}>{url}</span>
        <Button variant="secondary" onClick={handleCopy}>
          Copy
        </Button>
      </div>
    </div>
  );
}
