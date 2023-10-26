import "./App.css";
import NameBadge from "./components/NameBadge/NameBadge";
import NameList from "./components/NameList/NameList";

function App() {
  return (
    <div className="App">
      <NameBadge displayedName="Olivia Lewis" />
      <NameList />
    </div>
  );
}

export default App;
