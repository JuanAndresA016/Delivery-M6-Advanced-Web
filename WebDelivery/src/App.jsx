import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/homePage/Home";
import Default from "./components/default/Default";
import MinecraftForm from "./components/minecraftForm/MinecraftForm";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minecraft" element={<MinecraftForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}