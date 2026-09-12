import { NextResponse } from "next/server";
import { createShortLink } from "../../../services/linkService";

export async function POST(request) {
  let body;

    try {
        body = await request.json();
          } catch {
              return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
                }

                  try {
                      const link = createShortLink({
                            original_url: body?.original_url,
                                  custom_alias: body?.custom_alias,
                                      });

                                          return NextResponse.json({ short_code: link.short_code }, { status: 200 });
                                            } catch (error) {
                                                return NextResponse.json({ error: error.message }, { status: 400 });
                                                  }
                                                  }
                                                  