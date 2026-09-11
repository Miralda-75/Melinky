import { NextResponse } from "next/server";
import { validateUrl } from "../../../utils/validation";
import { generateShortCode } from "../../../utils/generateCode";

export async function POST(request) {
  let body;

    try {
        body = await request.json();
          } catch {
              return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
                }

                  const validation = validateUrl(body?.original_url);

                    if (!validation.isValid) {
                        return NextResponse.json({ error: validation.message }, { status: 400 });
                          }

                            // custom_alias sengaja belum diproses (Step 7 hanya generate short-code).
                              // Menyimpan ke database dan Link Service menyusul di Step 8-9.
                                const shortCode = generateShortCode();

                                  return NextResponse.json({ short_code: shortCode }, { status: 200 });
                                  }
                                  