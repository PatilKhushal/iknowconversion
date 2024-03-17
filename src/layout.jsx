import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Popup from "./components/popup/Popup";
import State from "./context/context";
import "./assets/css/dark.css";
import "./assets/css/style.css";
import "./globals.css";
import "./assets/css/plugins.css";

/** Layout funtion */
export default function RootLayout({ children }) {
  return (
          <>
          <State>
            <Preloader />
            <Popup />
            {children}
          </State>
          <Cursor />
          </>
  );
}
