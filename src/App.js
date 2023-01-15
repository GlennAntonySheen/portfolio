import React, { useState, } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import Mouse from "./components/mouse";
export const MouseContext = React.createContext()

function App() {
	const [cursorVariant, setCursorVariant] = useState({ variant: 'default', });
	const ref = React.useRef(null);

	return <div ref={ref}>
		<MouseContext.Provider value={{ cursorVariant, setCursorVariant }}>
			<Mouse pageRef={ref} />
			<Router>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Projects />} />
				</Routes>
			</Router>
		</MouseContext.Provider>
	</div>;
}

export default App;