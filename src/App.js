import "./App.css";
import Highlights from "./Component/Highlights/Highlights";
import SideHeading from "./Component/Highlights/SideHeading";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return <div>
    <Navbar/>
    <SideHeading/>
    <Highlights/>
  </div>;
}

export default App;
