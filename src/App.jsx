import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PasswordStrengthChecker from "./pswd";

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>smtg</button>
      </div>
      <PasswordStrengthChecker />
    </>
  );
}

export default App;
