export async function handler(event) {
  const slug = event.path.replace("/f/", "");

  return {
    statusCode: 302,
    headers: {
      Location: `/form-viewer.html?slug=${encodeURIComponent(slug)}`
    },
    body: ""
  };
}
