import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import axios from 'axios';


const ProjectsWrapper = styled.div`
    height: 100vh;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    /* background-color: #2C3639; */
`;

const ProjectsNutshell = styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: #0084ad;
`;

const ProjectsTitlesContainer = styled(motion.ul)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 1rem;
    list-style-type: none;
    overflow: scroll;
    background-color: #bbff00;

`;

const ProjectsTitle = styled(motion.li)`
    width: 100%;
    height: 150px;
    margin-top: 1rem;
    background-color: #ff00bf;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const ProjectContainer = styled(motion.div)`
    /* width: auto; */
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 1rem;
    overflow: scroll;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    background-color: #00ad0e;

    .gallery-item-container {
        border-radius: 1rem;
    }
`;

const GalleryContainer = styled.div`
    width: 100%;
    height: 65%;
    background-color: #ff00bf;
`;

const ProjectInfo = styled.div`
        background-color: grey;
        `;

const ProjectHeading = styled.h1`
    margin: 0;

    background-color: #740074;
`;

const ProjectSpecifications = styled.div`
    display: flex;
        background-color: violet;
`;

const ProjectDescription = styled.div`
    flex: 5;
        background-color: yellow;
`;

const ToolsContainer = styled.div`
    flex: 2;
        background-color: green;
    h1 {

    }
`;

const SkillsList = styled.div`
    display: flex;
    gap: 1rem;
        background-color: #00aeff;
`;

const Skill = styled.div`
    width: 100px
        background-color: red;
`;

export default function Projects() {
    const [prj, setprj] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [projectImages, setProjectImages] = useState([
        { itemId: "pc-m", mediaUrl: require("../../assets/image/projects/abc/IMG_4011.webp") },
        { itemId: "hg", mediaUrl: require("../../assets/image/projects/abc/IMG_4015.webp") },
        { itemId: "c-m", mediaUrl: require("../../assets/image/projects/abc/IMG_4644.webp") },
        { itemId: "pi-m", mediaUrl: require("../../assets/image/projects/abc/IMG_6759.webp") },
        { itemId: "pic-", mediaUrl: require("../../assets/image/projects/abc/IMG_7064.webp") },
        { itemId: "-m", mediaUrl: require("../../assets/image/projects/abc/IMG_7067.webp") },
        { itemId: "pim", mediaUrl: require("../../assets/image/projects/abc/IMG_7234.webp") }
    ])
    const [state, setState] = useState([])
    const [galleryDiamentions, setgalleryDiamentions] = useState({ height: 0, width: 0 })
    const galleryRef = useRef(null);
    const projects = [
        {
            projectName: 'Exam Duty Management System',
            ProjectDescription: `'The Hidden Blade' inspired from Assasin's Creed game franchises`,
            ProjectURL: 'HiddenBlade'
        },
        {
            projectName: 'The Hidden Blade',
            ProjectDescription: `'The Hidden Blade' inspired from Assasin's Creed game franchises`,
            ProjectURL: 'HiddenBlade'
        },
    ]

    function getImagePaths() {
        function importAll(r) {
            return r.keys().map(r);
        }

        let images = importAll(require.context('../../assets/image/projects/abc/', false, /\.(webp|jpe?g|svg)$/));
        images = images.map((image, index) => ({ itemId: `pc-${index}`, mediaUrl: image }));
        setState(images)

        // console.log("🚀 ~ file: index.jsx:124 ~ getImagePaths ~ imgPaths", imgPaths)
    }

    useEffect(() => {
        getImagePaths()
        // setProjectImages(getImagePaths)    
    }, [])

    useEffect(() => {
        if (galleryRef.current) {
            setgalleryDiamentions({ height: galleryRef.current.offsetHeight, width: galleryRef.current.offsetWidth })
        }
        // console.log('width', galleryRef.current ? galleryRef.current.offsetWidth : 0, galleryRef.current.offsetHeight);
    }, [galleryRef.current]);

    const container = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    // The eventsListener will notify you anytime something has happened in the gallery.
    // const eventsListener = (eventName, eventData) => console.log({ eventName, eventData });
    const eventsListener = (eventName, eventData) => { };
    const scrollingElement = window;

    return <ProjectsWrapper>
        <ProjectsNutshell>
            <h1>Projects</h1>
            <ProjectsTitlesContainer
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <ProjectsTitle
                        variants={item}
                        key={index}
                        className="item"
                        onClick={() => console.log(index)}
                    />
                ))}
            </ProjectsTitlesContainer>
        </ProjectsNutshell>

        {/* {projectImages?.map(image => {
        console.log("🚀 ~ file: index.jsx:203 ~ Projects ~ image", image.mediaUrl)

    })
    
} */}

        <ProjectContainer>
            <GalleryContainer ref={galleryRef}>
                <ProGallery
                    items={state}
                    // items={[{ mediaUrl: 'https://res.com/dulilyahn/image/upload/v1673412919/cld-sample-5.jpg' }]}
                    options={{
                        "layoutParams": {
                            "structure": {
                                "galleryLayout": 0,
                                "scrollDirection": "HORIZONTAL",
                                "itemSpacing": 16
                            }
                        },
                        "behaviourParams": {
                            "gallery": {
                                "scrollAnimation": "FADE_IN"
                            },
                            "item": {
                                "clickAction": "MAGNIFY",
                                "video": {
                                    "playTrigger": "HOVER"
                                },
                                "overlay": {
                                    "hoveringBehaviour": "NEVER_VISIBLE"
                                },
                                "content": {
                                    "hoverAnimation": "ZOOM_IN"
                                }
                            }
                        },
                        "stylingParams": {
                            "itemBorderRadius": 12
                        }
                    }}
                    container={{
                        width: galleryDiamentions.width,
                        height: galleryDiamentions.height
                    }}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}

                />
            </GalleryContainer>
            <ProjectInfo>
                <ProjectHeading>{projects[0].projectName}</ProjectHeading>
                <ProjectSpecifications>
                    <ProjectDescription>
                        {projects[0].ProjectDescription}
                    </ProjectDescription>

                    <ToolsContainer>
                        <h1>Skills gained</h1>
                        <SkillsList>
                            <Skill>ff</Skill>
                            <Skill>ff</Skill>
                            <Skill>ff</Skill>
                            <Skill>ff</Skill>
                        </SkillsList>
                    </ToolsContainer>
                </ProjectSpecifications>
            </ProjectInfo>
            {/* <button onClick={() => console.log([{mediaUrl: require("../../assets/image/projects/abc/IMG_20170213_215105.jpg")}])}>gffh</button> */}
        </ProjectContainer>
    </ProjectsWrapper>
}
