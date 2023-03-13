import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LearnHOC from "./pages/LearnHOC";

function App() {

  const Button = (props) => <button style={props.style}>Click Me</button>
  const Text = (props) => <p style={props.style}>Click Me</p>
  
  const StyleButton = LearnHOC(Button)
  const StyleText = LearnHOC(Text)

  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <StyleButton/>
      <StyleText/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LearnHoc' element={<LearnHOC/>}/>
      </Routes>
    </div>
  );
}

export default App;
