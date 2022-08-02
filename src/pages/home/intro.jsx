import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// import { MouseContext } from '../../App'
import { Typewriter } from 'react-simple-typewriter'
import Lottie from 'react-lottie';
import CoverImg from '../../assets/image/introImg.svg'
import Img from '../../assets/lottie/astronaut.json'


const IntroWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    /* background-color: red; */
`;

const BackgroungImg = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -2;
    /* margin-left: 10%; */
`;

const ForgroundImg = styled(motion.div)`
    height: 700px;
    position: absolute;
    right: 40%;
    /* margin-left: 40%; */
    /* background-color: green; */
`;

const IntroTextContainer = styled.div`
    /* width: auto; */
    display: flex;
    flex-direction: column;
    left: 3%;
    position: absolute;
    /* padding-left: 2rem; */
    /* background-color: grey;   */

    h1 {
        font-family: "CascadiaCode";
        font-size: 4em;
        white-space: nowrap;
        color: #243A73;
        /* background-color: blue;   */
    }
    
    label {
        width: 550px;
        font-size: 1.5em;
	    font-family: 'Poppins-Regular';
        color: #0E185F;
        /* color: #3F4E4F; */
    }
`;

export default function Intro() {
    // const { cursorVariant, setCursorVariant } = React.useContext(MouseContext);
    return <IntroWrapper>
        <BackgroungImg src={CoverImg} />
        {/* <h1>{`<Hello World>`}</h1> */}

        <IntroTextContainer>
            <h1>
                <Typewriter
                    words={['<Hello World>',]}
                    cursor={true}
                    cursorStyle='_'
                    typeSpeed={150}
                // cursor={false}
                />
            </h1>
            <motion.label
                initial={{ opacity: 0, x: -30, y: 30 }}
                transition={{ type: "spring", stiffness: 100 }}
                animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 2.5 } }}
            >I'm Glenn Antony Sheen And I Convert Coffe Into Code.</motion.label>
        </IntroTextContainer>
        
        <ForgroundImg
            initial={{ x: '-15%', y: '-5%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            animate={{ x: '70%', y: '-11%', opacity: 1, }}
        >
            <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: Img,
                }}
            />
        </ForgroundImg>
    </IntroWrapper>
}

