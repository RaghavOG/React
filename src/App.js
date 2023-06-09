// import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
// import Person from "./Components/Person";
// import Man from "./Components/Man";
// import Raghuuu from "./Components/Raghuuu";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="Title with Props" searchPlaceholder="Search  Props" />
      <div className="container">
        <Textform /> 
        {/* <Textform heading="Enter Your Text"/>  */}
        <About/>
      </div>
    </>
  );
}

export default App;
