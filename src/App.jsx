import Home from "./pages/Home";
import "./assets/styles/main.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Sources from "./pages/Sources";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sources' element={<Sources />} />
			</Routes>
		</>
	);
}

export default App;
