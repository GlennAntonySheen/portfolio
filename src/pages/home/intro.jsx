import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { PrimaryAssetsContext } from '../../pages/home'
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
    width: 490px;
    /* display: flex;
    flex-direction: column; */
    left: 4%;
    position: absolute;
    /* padding-left: 2rem; */
    /* background-color: grey;   */

    h1 {
        font-family: "CascadiaCode";
        font-size: 4em;
        white-space: nowrap;
  font-display: block;

        /* color: #243A73; */
        color: #212228;
        /* background-color: blue;   */
    }
    
    label {
        width: 550px;
        font-size: 1.5em;
	    font-family: 'SF Pro Display Regular';
  font-display: block;
        color: #14151b;
    }
`;

export default function Intro(props) {
    const { setInitialAssets } = React.useContext(PrimaryAssetsContext);
    return <IntroWrapper>
        <BackgroungImg
            src={CoverImg}
            onLoad={() => {
                console.log('cover image loaded');
                setInitialAssets(prevState => ({ ...prevState, coverImg: true }))
            }
            }
            fetchpriority="low"
            alt="backgroung image" />
        {props.loadedPrimaryAssets && <>
            <IntroTextContainer>
                <h1>
                    <Typewriter
                        words={['<Hello World>',]}
                        cursor={true}
                        cursorStyle='_'
                        typeSpeed={150}
                    />
                </h1>
                <motion.label
                    initial={{ opacity: 0, x: -30, y: 30 }}
                    animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 2.5 } }}
                    transition={{ type: "spring", stiffness: 100 }}
                >I'm</motion.label>
                <motion.label
                    initial={{ opacity: 0, x: -30, y: 30, fontWeight: 'bold', fontSize: '2.2em' }}
                    animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 3 } }}
                    transition={{ type: "spring", stiffness: 100 }}
                > Glenn Antony Sheen.</motion.label>
                <motion.label
                    initial={{ opacity: 0, x: -30, y: 30, }}
                    animate={{ opacity: 1, x: 0, y: 0, transition: { delay: 4 } }}
                    transition={{ type: "spring", stiffness: 100 }}
                > I Convert Coffee Into Code.</motion.label>
            </IntroTextContainer>

            <ForgroundImg
                initial={{ x: '-15%', y: '-5%', opacity: 0 }}
                animate={{ x: '70%', y: '-11%', opacity: 1, }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: Img,
                    }}
                />
            </ForgroundImg>
        </>}
    </IntroWrapper>
}

