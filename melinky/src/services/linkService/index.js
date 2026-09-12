import { validateUrl } from "../../utils/validation";
import { generateShortCode } from "../../utils/generateCode";

const ALIAS_PATTERN = /^[a-zA-Z0-9-]+$/;
const ALIAS_INVALID_MESSAGE = "Please enter a valid alias.";

/**
 * Business logic pembuatan shortlink. BELUM menyentuh database — cuma
  * memutuskan short_code mana yang dipakai (random atau custom alias).
   * @param {{ original_url: string, custom_alias?: string }} input
    * @returns {{ original_url: string, short_code: string }}
     * @throws {Error} kalau original_url atau custom_alias tidak valid.
      */
      export function createShortLink({ original_url, custom_alias }) {
        const validation = validateUrl(original_url);

          if (!validation.isValid) {
              throw new Error(validation.message);
                }

                  const alias = typeof custom_alias === "string" ? custom_alias.trim() : "";

                    if (alias === "") {
                        return { original_url, short_code: generateShortCode() };
                          }

                            if (!ALIAS_PATTERN.test(alias)) {
                                throw new Error(ALIAS_INVALID_MESSAGE);
                                  }

                                    // Step 8 belum cek uniqueness ke database — alias yang formatnya valid
                                      // langsung dipakai sebagai short_code. Pengecekan tabrakan menyusul Step 9.
                                        return { original_url, short_code: alias };
                                        }
                                        