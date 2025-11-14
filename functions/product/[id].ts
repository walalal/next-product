export const runtime = "edge";

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  return new Response(`Edge Function Works! Product ID: ${id}`, {
    headers: { "content-type": "text/plain" },
  });
}
