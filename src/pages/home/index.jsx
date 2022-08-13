import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie';
import FontFaceObserver from 'fontfaceobserver';
import Intro from './intro';
import Skills from './skills';
// const Intro = React.lazy(() => import('./intro'))
// const Skills = React.lazy(() => import('./skills'))
import Img from '../../assets/lottie/waiting.json'

const HomeWrapper = styled.div`

`;

const SplashScreen = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;

	/* background-color: #2C3639; */
`;

const LoadingImg = styled(motion.div)`
    height: 50vh;
`;

export const PrimaryAssetsContext = React.createContext();

export default function Home() {
	const [primaryAssets, setPrimaryAssets] = useState({
		coverImg: false,
		allFonts: false,
		showedLoading: false,
	});
	// Set to true if all primary assets are loaded
	const [loadedPrimaryAssets, setLoadedPrimaryAssets] = useState(false);

	useEffect(() => {
		// Checks if every primary assets have loaded and then sets the loadedPrimaryAssets to true
		if (Object.values(primaryAssets).every(value => value === true)) {
			setLoadedPrimaryAssets(true);
		}
	}, [primaryAssets])

	useEffect(() => {
		var font_CascadiaCode = new FontFaceObserver('CascadiaCode');
		var font_SFProDisplayRegular = new FontFaceObserver('SF Pro Display Regular');
		
		// Promise is returned if every fonts have loaded
		Promise.all([font_CascadiaCode.load(null, 100000), font_SFProDisplayRegular.load(null, 100000)]).then(function () {
			console.log('fonts have loaded');
			setPrimaryAssets(prevState => ({ ...prevState, allFonts: true }))
		});

		// Loading animation will show atleast for a small amount of time 
		setTimeout(() => setPrimaryAssets(prevState => ({ ...prevState, showedLoading: true })), 2000)
	}, [])


	return <>
		{!loadedPrimaryAssets && <SplashScreen>
            <LoadingImg
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: Img,
                    }}
                />
            </LoadingImg>
		</SplashScreen>}
		<HomeWrapper style={{ display: loadedPrimaryAssets ? 'block' : 'none' }}>
			<PrimaryAssetsContext.Provider value={{ setInitialAssets: setPrimaryAssets }}>
				<Intro loadedPrimaryAssets={loadedPrimaryAssets} />
				<Skills />
			</PrimaryAssetsContext.Provider>
		</HomeWrapper>
	</>
}
