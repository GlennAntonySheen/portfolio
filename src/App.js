import React, { useState,  } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Home from './pages/home';
import useMouse from "@react-hook/mouse-position";

const MouseCursor = styled(motion.div)`
	border: 2px solid #2C3333;
	position: fixed;
	z-index: 100;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: 0;
	left: 0;
	height: 10px;
	width: 10px;
	background-color: red;
	border-radius: 50%;
	pointer-events: none;
	color: #fff;
	text-align: center;
	font-size: 16px;
`;

function App() {
	const cursorSpeed = 1.2;
	const [cursorText, setCursorText] = useState("A");
	const [cursorVariant, setCursorVariant] = useState("default");

	const ref = React.useRef(null);
	const mouse = useMouse(ref, {
		enterDelay: 50,
		leaveDelay: 50
	});
	let mouseXPosition = 0;
	let mouseYPosition = 0;

	if (mouse.x !== null) {
		mouseXPosition = mouse.clientX;
	}

	if (mouse.y !== null) {
		mouseYPosition = mouse.clientY;
	}

	const variants = {
		default: {
			opacity: 1,
			height: 25,
			width: 25,
			fontSize: "16px",
			// backgroundColor: "#1e91d6",
			x: mouseXPosition - 25 / 2 + cursorSpeed,
			y: mouseYPosition - 25 / 2 + cursorSpeed,
			transition: {
				type: "spring",
				mass: 0.12,
				stiffness: 500,
			}
		},
		clickable: {
			scale: 1.1,
		},
		contact: {
			opacity: 1,
			backgroundColor: "#FFBCBC",
			color: "#000",
			height: 64,
			width: 64,
			fontSize: "32px",
			x: mouseXPosition - 48,
			y: mouseYPosition - 48
		},
		hidden: {
			opacity: 0,
		}
	};

	function projectEnter(event) {
		setCursorText("View");
		setCursorVariant("project");
	}

	function projectLeave(event) {
		setCursorText("");
		setCursorVariant("default");
	}

	return <div ref={ref}>
		{mouse.x != null && mouse.y != null && <MouseCursor
			initial={{ 
				x: mouseXPosition - 25 / 2 + cursorSpeed,
				y: mouseYPosition - 25 / 2 + cursorSpeed,
				opacity: 0,
			}}
			variants={variants}
			animate={cursorVariant}
			// duration={5}
		>
			<span className="cursorText">{cursorText}</span>
		</MouseCursor>}
		<Router
			onMouseEnter={projectEnter}
			onMouseLeave={projectLeave}
		>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	</div>;
}

export default App;