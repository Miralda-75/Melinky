"use client";

import styles from "./Button.module.css";

export default function Button({
  children,
  type = "button",
  onClick,
  isLoading = false,
  disabled = false,
  variant = "primary",
  fullWidth = false,
}) {
  const isDisabled = disabled || isLoading;

  const className = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={className}
      aria-busy={isLoading}
    >
      {isLoading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
