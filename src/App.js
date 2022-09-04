import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="room" element={<Room />}>
          <Route path=":id"  />
        </Route>
      </Routes>
      {/* <Room /> */}
    </>
  );
}

export default App;
