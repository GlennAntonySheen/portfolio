import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useMouse from "@react-hook/mouse-position";
import { MouseContext } from '../../App';
const MouseCursor = styled(motion.div)`
	height: 20px;
	width: 20px;
	border: 2px solid #2C3333;
	position: fixed;
	z-index: 100;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: 0;
	left: 0;
	background-color: red;
	border-radius: 50%;
	pointer-events: none;
	color: #fff;
	text-align: center;
	font-size: 16px;
`;

const CursorTooltip = styled(motion.div)`
	min-width: 170px;
	display: flex;
	flex-direction: column;
	position: absolute;
	overflow: hidden;
	padding: 0 15px;
	font-family: 'SF Pro Display Regular';
	font-size: 19px;
    white-space: nowrap;
	border-radius: 15rem;
    color: #14151b;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(10px);

	span {
		margin-top: 5px;
		padding: 0 1px;
		display: flex;

		div {
			width: 100%;
			height: 4px;
			margin: 0 3px;
			border-radius: 1rem;
			background: #D1D1D1;

			&:first-child {
				margin-left: -9px;
			}

			&:last-child {
				margin-right: -9px;
			}

			&:nth-child(-n + ${props => props.level}) {
				background: ${props => props.color};
			}
		}
	}
`;


export default function Mouse(props) {
    const cursorSpeed = 1.2;
    const { cursorVariant, setCursorVariant } = React.useContext(MouseContext);

    const mouse = useMouse(props.pageRef, {
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
            x: mouseXPosition - 35 / 2 + cursorSpeed,
            y: mouseYPosition - 35 / 2 + cursorSpeed,
            transition: {
                type: "spring",
                mass: 0.12,
                stiffness: 300,
                // damping: 200,
            }
        },
        clickable: {
            x: mouseXPosition - 25 / 2 + cursorSpeed,
            y: mouseYPosition - 25 / 2 + cursorSpeed,
            scale: 1.3,
        },
        skillHover: {
            x: mouseXPosition - 18 / 2 + cursorSpeed,
            y: mouseYPosition - 18 / 2 + cursorSpeed,
            width: '18px',
            height: '18px',
            transition: {
                type: "spring",
                mass: 0.12,
                stiffness: 300,
            }
        },
        hidden: {
            opacity: 0,
        }
    };

    return <>
        {mouse.x != null && mouse.y != null && <MouseCursor
            initial={{
                x: mouseXPosition - 25 / 2 + cursorSpeed,
                y: mouseYPosition - 25 / 2 + cursorSpeed,
            }}
            variants={variants}
            animate={cursorVariant.variant}
        >
            {cursorVariant.variant == 'skillHover' &&
                <CursorTooltip
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, x: -4, y: -60, rotate: -3, transition: { delay: 0.7 } }}
                    level={cursorVariant.props.level}
                    color={cursorVariant.props.color}
                >
                    {cursorVariant.props.skillName}
                    <span>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </span>
                </CursorTooltip>
            }
        </MouseCursor>}
    </>
}