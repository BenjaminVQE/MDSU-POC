import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email manquant ou invalide" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID;

    if (!apiKey || !listId) {
      console.error("BREVO_API_KEY ou BREVO_LIST_ID manquant");
      return NextResponse.json(
        { error: "Configuration serveur incomplète" },
        { status: 500 }
      );
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true, // met à jour si le contact existe déjà
      }),
    });

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.json().catch(() => null);
      console.error("Brevo error:", errorBody || brevoResponse.statusText);
      return NextResponse.json(
        { error: "Impossible d’ajouter l’email à la newsletter" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur /api/newsletter", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription à la newsletter" },
      { status: 500 }
    );
  }
}
