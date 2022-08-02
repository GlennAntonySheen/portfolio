import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MouseContext } from '../../App'
import react from '../../assets/logo/react.png'
import nodejs from '../../assets/logo/nodejs.png'
import js from '../../assets/logo/js.png';
import html from '../../assets/logo/html.png';
import css from '../../assets/logo/css.png';
import androidStudio from '../../assets/logo/android-studio.png';
import arduino from '../../assets/logo/arduino.png';
import c from '../../assets/logo/c.png';
import figma from '../../assets/logo/figma.png';
import illustrator from '../../assets/logo/illustrator.png';
import jwt from '../../assets/logo/jwt.png';
import mui from '../../assets/logo/mui.png';
import mysql from '../../assets/logo/mysql.png';
import photoshop from '../../assets/logo/photoshop.png';
import powerpoint from '../../assets/logo/powerpoint.png';
import python from '../../assets/logo/python.png';
import excel from '../../assets/logo/excel.png';
import premierepro from '../../assets/logo/premiere-pro.png';
import github from '../../assets/logo/github.png';
import word from '../../assets/logo/word.png'
import moment from '../../assets/logo/moment.png';
import phpmyadmin from '../../assets/logo/phpmyadmin.png';
import vmware from '../../assets/logo/vmware.png';
import styledComponents from '../../assets/logo/styledComponents.png';
import vscode from '../../assets/logo/vscode.png';
import rfh from '../../assets/logo/rfh.png';
import netlify from '../../assets/logo/netlify.png';
import bootstrap from '../../assets/logo/bootstrap.png';

const SkilsWrapper = styled.div`
    /* height: 100vh; */
    width: 100%;
    displa: flex;
    /* background-color: #2C3639; */
`;

const SkilsHeader = styled.h1`
    /* height: 100vh; */
    width: 100%;
    margin: 0;
    text-align:center;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial","sans-serif";
    /* background-color: #ad0d0d; */
`;

const SkilsContainer = styled.div`
    /* height: 100vh; */
    width: 100%;
    padding: 1rem 5rem;
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fill, 1fr);
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial","sans-serif";
    /* background-color: #0dad4a; */
`;

const SkilStyle = styled(motion.img)`
    width: 100px;
    margin: 1rem 1.5rem;
    object-fit: contain;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    transition: all 5s ease-out;
    /* background-color: #09258b; */

    &:hover {
        transition: all .05s ease-out;
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
    }
`;

const Skils = (props) => {
    return <SkilStyle
        whileHover={{ scale: 1.1, rotate:  -3 }}
        // transition={{ type: "spring", stiffness: 400 }}
        whileTap={{
            scale: 0.8,
            rotate: -9,
        }}
        {...props}
    />
}

export default function Skills() {
    const { cursorVariant, setCursorVariant } = React.useContext(MouseContext);
    return <>
        <SkilsWrapper>
            <SkilsHeader>Technologies Familier With</SkilsHeader>
            <SkilsContainer>
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={react} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={nodejs} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={js} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={html} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={css} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={styledComponents} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={arduino} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={c} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={python} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={bootstrap} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={mui} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={figma} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={jwt} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={moment} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={rfh} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={mysql} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={phpmyadmin} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={github} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={netlify} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={androidStudio} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={vscode} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={powerpoint} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={word} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={excel} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={photoshop} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={illustrator} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={premierepro} />
                <Skils onMouseEnter={() => setCursorVariant('clickable')} onMouseLeave={() => setCursorVariant('default')} src={vmware} />
            </SkilsContainer>
        </SkilsWrapper>
        </>
}