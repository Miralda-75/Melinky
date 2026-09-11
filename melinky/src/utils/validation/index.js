// Pure validation helpers — no state, no side effects, reusable dari mana saja.
// Pesan error mengikuti PRD.md persis (jangan diubah tanpa update PRD).

const URL_REQUIRED_MESSAGE = "URL is required.";
const URL_INVALID_MESSAGE = "Please enter a valid URL.";

/**
 * Validasi URL tujuan untuk Melinky.
 * @param {string} rawUrl - nilai mentah dari input.
 * @returns {{ isValid: boolean, message: string }}
 */
export function validateUrl(rawUrl) {
  const value = typeof rawUrl === "string" ? rawUrl.trim() : "";

  if (value === "") {
    return { isValid: false, message: URL_REQUIRED_MESSAGE };
  }

  if (!hasValidUrlFormat(value)) {
    return { isValid: false, message: URL_INVALID_MESSAGE };
  }

  return { isValid: true, message: "" };
}

function hasValidUrlFormat(value) {
  let parsed;

  try {
    parsed = new URL(value);
  } catch {
    // new URL() throws untuk string yang bukan absolute URL yang valid,
    // termasuk domain tanpa protocol seperti "example.com".
    return false;
  }

  // Step 5 hanya mendukung http/https (PRD: "Mendukung URL dengan protocol
  // seperti https:// dan http://"). Protocol lain (mailto:, ftp:, javascript:, dst)
  // dianggap tidak valid untuk sebuah link shortener.
  return parsed.protocol === "http:" || parsed.protocol === "https:";
}
