import "./App.css";
import "./styles.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <h1>Local Weather</h1>
      <SearchForm />
      <p>
        This project was coded by Viktoria Schneider and is open-sourced on
        <a
          href="https://github.com/tshefu/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
