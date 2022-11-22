import React from 'react';
import gsap from 'gsap-trial';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import { deviceMedia } from 'common/media';
import AssetsImage from './assets';
import { IPopupThankyou } from './types';
import Link from 'next/link';
import { useRouter } from 'next/router';



const PopupThankyou = ({ popupOpen, setPopupOpen }: IPopupThankyou) => {

    const { t } = useTranslation('r2Contact');
    const router = useRouter()
    const tlRef = React.useRef<gsap.core.Timeline | null>(null)
    const starRef = React.useRef<HTMLImageElement>(null)
    const popupWrapperRef = React.useRef<HTMLDivElement>(null)
    const popupRef = React.useRef<HTMLElement>(null)

    React.useEffect(() => {
        tlRef.current = gsap.timeline({
            paused: true
        })

        tlRef.current.fromTo(popupWrapperRef.current, {
            zIndex: -1,
            pointerEvents: "none",
            opacity: 0,
        }, {
            zIndex: 1000,
            pointerEvents: "auto",
            opacity: 1,
        }).fromTo(document.body, {
            overflow: "auto",
            duration: 0.01
        }, {
            overflow: "hidden",
            duration: 0.01
        }).fromTo(popupRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
        })
    }, [])

    React.useEffect(() => {

        popupOpen
            ? tlRef.current?.play()
            : tlRef.current?.reversed(true)

        if (starRef.current)
            starRef.current.style.animationPlayState = popupOpen ? 'running' : 'paused';
    }, [popupOpen])

    React.useEffect(() => {
        const handler = () => setPopupOpen(!popupOpen)
        if (popupOpen) {
            router.events.on("routeChangeComplete", handler)
            return () => router.events.off("routeChangeComplete", handler)
        }
    }, [popupOpen])

    return (
        <>
            <PopupWrapper ref={popupWrapperRef} >
                <Popup ref={popupRef}>
                    <InnerContainer >
                        <Title>
                            {t("thank.title.text1")}
                            <StarIcon ref={starRef} src={AssetsImage.star} alt="Star Icon" />
                        </Title>
                        <Description>
                            {t("thank.desc.text1")}
                        </Description>
                        <Link href={"/"}>
                            <LinkA>{t("thank.button.text1")}</LinkA>
                        </Link>
                    </InnerContainer>
                </Popup>
            </PopupWrapper>
        </>
    )
}

export default PopupThankyou;

const PopupWrapper = styled.div`
    overflow: hidden;
    padding: 120px ;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    height: ${props => props.theme.customFullHeight};
    width: 100vw;
    background: #000;
    z-index:-1;
    opacity: 0;
    pointer-events: "none";
    ${deviceMedia.media1440} {
        padding: 20px  ;
        padding: 
        calc(20px + (120 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        ;
    }
`;
const Popup = styled.article`
    overflow: hidden;
    overflow-y: auto;
    max-height: 90vh;   
    max-height: calc(var(--vh, 1vh) * 90);   
`;
const InnerContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    background-image: url("${AssetsImage.circleCylinder}");
    background-size: 220px;
    background-position: -45px 120%;
    background-repeat: no-repeat;
    background-color:  #D9D9D9;
      
    padding: 21px 55px 130px;
    ${deviceMedia.media1440} {
        background-image: none;
        padding: 21px 20px 30px;
        padding: 21px
        calc(20px + (55 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        60px;
    }
`;
const StarIcon = styled.img`
    position: relative;
    right: 100px;
    top: 0px;
    z-index: -1;
    animation: rotate-star 3s infinite;
    animation-timing-function: linear;
    width: 246px;
    height: 246px;
    @keyframes rotate-star {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg);  }
    }
    ${deviceMedia.media1440} {
        width: 123px;
        height: 123px;
        top: 15px;
        width: calc(123px + (246 - 123) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        height: calc(123px + (246 - 123) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        top: calc(15px + (0 - 15) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));

    }
    ${deviceMedia.media428} {
        width: 23px;
        height: 23px;
        right: 50px;
        top: 5px;
        width: calc(23px + (123 - 23) * ((100vw - 0px ) / (428)));
        height: calc(23px + (123 - 23) * ((100vw - 0px ) / (428)));
        right: calc(0px + (100 - 0) * ((100vw - 0px ) / (428)));
        top: calc(5px + (20 - 5) * ((100vw - 0px ) / (428)));
    }
`;
const Title = styled.h1`
    font-family: ${props => props.theme.AnteCFBlack};
    position: relative;
    z-index: 2;
    font-size: 180px;
    line-height: 50%;
    padding-bottom: 50px;
    padding-right: 170px;
    text-transform: capitalize;
    width: max-content;
   
    ${deviceMedia.media1440} {
        background-size: 123px;
        background-size: calc(123px + (246 - 123) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));

        padding-right: 30px;
        padding-right: calc(30px + (170 - 30) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        
       
        padding-bottom: 30px;
        padding-bottom: calc(30px + (50 - 30) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        
        font-size: 64px;
        font-size: calc(64px + 116 * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    ${deviceMedia.media428} {
        
        background-size: 23px;
        background-size: calc(23px + (123 - 23) * ((100vw - 0px ) / (428)));

        padding-right: 25px;
        padding-right: calc(25px + (30 - 25) * ((100vw - 0px ) / (428)));

        font-size: 20px;
        font-size: calc(0px + (64 - 0) * ((100vw - 0px ) / (428)));
    }
`;
const Description = styled.div`
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 20px;
    line-height: 150%;
    padding: 87px 0;
    ${deviceMedia.media1440} {
        padding-top: 36px;
        padding-bottom: 51px;
        padding-top: calc(36px + 51 * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        padding-bottom: calc(51px + 36 * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    ${deviceMedia.media428} {
        font-size: 16px;
        font-size: calc(12px + (20 - 12) * ((100vw - 0px ) / (428)));
    }
    text-align: justify;
    letter-spacing: 0.2px;
    text-transform: uppercase;
`;
const LinkA = styled.a`
    font-family: ${props => props.theme.PublicSansBold};
    width: 100%;
    background: transparent;
    font-size: 20px;
    line-height: 32px;
    padding: 44px 0;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    border: 1px solid ${props => props.theme.black};
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &::after {
        content: "";
        background-image: url("${AssetsImage.lineArrRight}");
        background-size: cover;
        background-position: right;
        width: 88px;
        margin-left: 26px;
        height: 17px;
        display: block;
        ${deviceMedia.media1440} {
            width: 18px;
            margin-left: 8px;
            min-width: 18px;
            width: calc(18px + 70 * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
            margin-left: calc(8px + 18 * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        }
    }
`;