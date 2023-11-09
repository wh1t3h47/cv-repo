import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { Talkr } from "talkr";
import pt from "../utils/i18n/pt.json";
import en from "../utils/i18n/en.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Talkr languages={{ pt, en }} defaultLanguage="en" detectBrowserLanguage>
    <App />
  </Talkr>,
);
