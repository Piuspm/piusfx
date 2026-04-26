import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply saved theme (default = dark) BEFORE first render to avoid flash
const saved = localStorage.getItem("piusfx-theme");
if (saved === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
