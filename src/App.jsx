import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Nav1 from "./navbar";
import "/src/App.css";
import Timetable from "./timetable";

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Timetable in React</h1>
      <div className="card">
        <button>smtg</button>
        <Timetable />
      </div>
    </>
  );
}

export default App;
