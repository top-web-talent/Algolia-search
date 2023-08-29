import logo from "./logo.svg";
import "./App.css";

import Canvas from "./components/canvassearchbox";
import GridStyle from "./components/gridstylesearchresults";
import HomePage from "./components/homepage";
import {InfiniteScroll} from "./components/infintescroll";

function App() {
  return (
    <div className="App" class="d-flex justify-content-start">
      <div class="w-75">
        <HomePage />
        <GridStyle />
        {/* <InfiniteScroll /> */}
      </div>
      <Canvas class="w-24" />
    </div>
  );
}

export default App;
