export const BACKEND_API =
  window.location.hostname === "localhost"
    ? "http://localhost:8000"
    : "https://grocery-be-production.up.railway.app";
