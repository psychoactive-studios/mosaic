// app/api/submit/route.ts
import { client } from "@/../../sanity/lib/client";

export async function POST(request) {
  try {
    const doc = await request.json();
    await client.create(doc);
    return new Response(
      JSON.stringify({ message: "Comment submitted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error submitting comment", error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
