"use client";

import { useState } from "react";
import styles from "./ShortenerForm.module.css";
import Button from "../Button/Button";
import ResultCard from "../ResultCard/ResultCard";
import { validateUrl } from "../../utils/validation";

export default function ShortenerForm() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const validation = validateUrl(url);

    if (!validation.isValid) {
      setStatus("error");
      setErrorMessage(validation.message);
      return;
    }

    // URL valid. Short-code generation and the POST /api/links call are
    // implemented in Step 7-8 — Step 5 only confirms validation passes.
    setStatus("idle");
    setErrorMessage("");
    console.log("URL validation passed:", url);
  }

  const isSubmitDisabled = url.trim() === "" || status === "loading";

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="url" className={styles.label}>
          Destination URL
        </label>
        <input
          id="url"
          name="url"
          type="text"
          inputMode="url"
          autoComplete="off"
          placeholder="https://example.com/very/long/url"
          className={styles.input}
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          disabled={status === "loading"}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="alias" className={styles.label}>
          Custom alias <span className={styles.optional}>(optional)</span>
        </label>
        <input
          id="alias"
          name="alias"
          type="text"
          autoComplete="off"
          placeholder="portfolio"
          className={styles.input}
          value={alias}
          onChange={(event) => setAlias(event.target.value)}
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" isLoading={status === "loading"} disabled={isSubmitDisabled} fullWidth>
        Shorten
      </Button>

      {status === "success" && result ? <ResultCard url={result} /> : null}
    </form>
  );
}
