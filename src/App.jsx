
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Comission from "./pages/Comission/Comission";
import Tos from "./pages/TOS/tos";
import Portfolio from "./pages/Portfolio/Portfolio";
import Layout from "./Layout/Layout"; // Correct case


const App = () => {
  return (
    <>
      <Routes basename="/">
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comission" element={<Comission />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tos" element={<Tos />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
