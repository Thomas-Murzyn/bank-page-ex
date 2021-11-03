import "./App.css";
import Header from "./components/Header";
import data from "./data.json";
import Accounts from "./components/Accounts";

function App() {
  return (
    <div className="all">
      <Header username="Thomas" />
      <Accounts data={data} />
    </div>
  );
}

export default App;
