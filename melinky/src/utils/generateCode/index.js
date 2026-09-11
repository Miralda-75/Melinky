// Pure short-code generator — no state, no I/O, no uniqueness check.
// Uniqueness terhadap database jadi tanggung jawab Link Service (Step 9),
// bukan generator ini.

const ALPHABET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const DEFAULT_LENGTH = 6;

  /**
   * Menghasilkan short-code random yang aman untuk URL (a-z, A-Z, 0-9).
    * @param {number} [length=6] - panjang kode yang dihasilkan.
     * @returns {string}
      */
      export function generateShortCode(length = DEFAULT_LENGTH) {
        let code = "";

          for (let i = 0; i < length; i += 1) {
              const randomIndex = Math.floor(Math.random() * ALPHABET.length);
                  code += ALPHABET[randomIndex];
                    }

                      return code;
                      }
                      