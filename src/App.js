import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Greet name="Bruce" heroName="batMan">
         <p>This is children component props</p>
      </Greet>
      <Greet name="Clark" heroName="superMan">
         <button>Button</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="wonderHuman" /> */}

      {/* <Welcome name="Bruce" heroName="batMan" /> */}
      {/* <Welcome name="Clark" heroName="superMan"/>
      <Welcome name="Diana" heroName="wonderHuman"/> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
