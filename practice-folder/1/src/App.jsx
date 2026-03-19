import "./App.css";
import Header from "./components/Header";
import { ThemeContext } from "./store/ThemeContextProvider";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
        <Header />
    </div>
  );
}

export default App;
