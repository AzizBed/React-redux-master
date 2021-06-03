import "./App.css";
import Addtask from "./Components/Addtask/Addtask";
import ListTask from "./Components/ListTask/ListTask";

function App() {
  

    return (
        <div className="App">
            <div className="container">
                <Addtask  />
                <ListTask   />
            </div>
        </div>
    );
}

export default App;
