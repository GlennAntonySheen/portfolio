import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Projects() {
    const [prj, setprj] = useState(false);

    useEffect(() => {
        console.log('first)(true');
    } , [])

    useEffect(() => {
        console.log('second)(true');
    } , [prj])

    return <>
        <button onClick={() => {
            setprj(!prj);
        }}>sdfsd</button>
    </>
}