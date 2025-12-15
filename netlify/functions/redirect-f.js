export async function handler(event) {
  const path = event.path || "";
  const slug = path.replace(/^\/f\//, "");

  return {
    statusCode: 302,
    headers: {
      Location: `/form-viewer.html?slug=${encodeURIComponent(slug)}`
    },
    body: ""
  };
}
