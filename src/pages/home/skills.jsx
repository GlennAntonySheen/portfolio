import React, { useState, useEffect, createRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MouseContext } from '../../App'
import ColorThief from "colorthief";
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
import word from '../../assets/logo/word.webp'
import moment from '../../assets/logo/moment.png';
import phpmyadmin from '../../assets/logo/phpmyadmin.png';
import vmware from '../../assets/logo/vmware.png';
import styledComponents from '../../assets/logo/styledComponents.png';
import vscode from '../../assets/logo/vscode.png';
import rfh from '../../assets/logo/rfh.png';
import netlify from '../../assets/logo/netlify.png';
import bootstrap from '../../assets/logo/bootstrap.png';
import Bash from '../../assets/logo/bash.svg';
// import { ReactComponent as Bash } from '../../assets/logo/bash.svg';

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

const Skils = styled(motion.img)`
    width: 100px;
    margin: 1rem 1.5rem;
    object-fit: contain;
    transition: all .5s ease-out;

    &:hover {
        transition: all .05s ease-in-out;
    }
`;

export default function Skills() {
    const { cursorVariant, setCursorVariant } = React.useContext(MouseContext);
    const [Skills, setSkills] = useState([
        { skillImg: react, skillName: 'React JS', level: 4 },
        { skillImg: nodejs, skillName: 'Node JS', level: 3 },
        { skillImg: js, skillName: 'Java Script', level: 3 },
        { skillImg: html, skillName: 'Hypertext Markup Language', level: 5 },
        { skillImg: css, skillName: 'Cascading Style Sheets', level: 5 },
        { skillImg: python, skillName: 'Python 3', level: 3 },
        { skillImg: arduino, skillName: 'Arduino', level: 5 },
        { skillImg: c, skillName: 'C / C++', level: 4 },
        // { skillImg: Bash, skillName: 'Bash', level: 2 },
        { skillImg: styledComponents, skillName: 'Styled Components', level: 5 },
        { skillImg: bootstrap, skillName: 'Bootstrap', level: 5 },
        { skillImg: mui, skillName: 'Material UI', level: 5 },
        { skillImg: figma, skillName: 'Figma', level: 3 },
        { skillImg: jwt, skillName: 'JWT', level: 3 },
        { skillImg: moment, skillName: 'Moment JS', level: 4 },
        { skillImg: rfh, skillName: 'React Form Hooks', level: 5 },
        { skillImg: mysql, skillName: 'MySQL', level: 4 },
        { skillImg: phpmyadmin, skillName: 'PhpMyAdmin', level: 5 },
        { skillImg: github, skillName: 'Github', level: 3 },
        { skillImg: netlify, skillName: 'Netlify', level: 4 },
        { skillImg: androidStudio, skillName: 'Android Studio', level: 3 },
        { skillImg: vscode, skillName: 'VSCode', level: 5 },
        { skillImg: powerpoint, skillName: 'Microsoft PowerPoint', level: 5 },
        { skillImg: word, skillName: 'Microsoft Word', level: 5 },
        { skillImg: excel, skillName: 'Microsoft Excel', level: 2 },
        { skillImg: photoshop, skillName: 'Adobe Photoshop', level: 3 },
        { skillImg: illustrator, skillName: 'Adobe Illustrator', level: 3 },
        { skillImg: premierepro, skillName: 'Adobe Premiere Pro', level: 4 },
        { skillImg: vmware, skillName: 'VMware', level: 3 },
    ]);

    function rgbToHex(r, g, b) {
        function componentToHex(color) {
            var hex = color.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }

    useEffect(() => {
        let tempSkills = Skills;
        tempSkills.forEach((skill) => {
            var img = new Image();
            img.src = skill.skillImg;
            img.onload = function () {
                const colorThief = new ColorThief();
                const result = colorThief.getColor(img, 59);
                skill.color = rgbToHex(result[0], result[1], result[2]);
            }
        })
    }, [])

    return <>
        <SkilsWrapper>
            <SkilsHeader>Technologies Familier With</SkilsHeader>
            <SkilsContainer>
                {/* <img src={Bash} /> */}
                {Skills.map((skill, index) => {
                    return <Skils
                        whileHover={{ scale: 1.13, rotate: -3, }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -9,
                        }}

                        key={index}
                        onMouseEnter={() => setCursorVariant({ variant: 'skillHover', props: { skillName: skill.skillName, level: skill.level, color: skill.color } })}
                        onMouseLeave={() => setCursorVariant({ variant: 'default', })}
                        src={skill.skillImg}
                        fetchpriority="low"
                        alt="skill"
                    />
                })}
            </SkilsContainer>
        </SkilsWrapper>
    </>
}