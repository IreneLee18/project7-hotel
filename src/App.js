import Home from "./pages/Home";
import Room from "./pages/Room/Room";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="room">
          <Route path=":id" element={<Room />}/>
        </Route>
      </Routes>
      {/* <Room /> */}
    </>
  );
}

export default App;
