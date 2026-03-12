import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/homePage/Home";
import Default from "./components/default/Default";
import MinecraftForm from "./components/minecraftForm/MinecraftForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minecraft" element={<MinecraftForm />} />
        <Route path="/*" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}