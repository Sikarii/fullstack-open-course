import { createRoot } from "react-dom/client";

import App from "./App";
import { NotificationProvider } from "./components/Notification";

const el = document.getElementById("root");

const root = createRoot(el);

root.render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
