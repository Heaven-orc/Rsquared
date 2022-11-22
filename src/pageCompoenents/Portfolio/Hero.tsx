import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import Link from "next/link";
import { deviceMedia } from "../../common/media";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

interface portfolioType {
    image: string;
    icon: string;
    link: string;
    alt: string;
}

const Hero = () => {
    const { t } = useTranslation('r2Portfolio');

    const portfolioListData: portfolioType[] = [
        { image: AssetsImage.portItem1, icon: AssetsImage.portItem1Icon, link: 'https://cwallet.com', alt: 'Cwallet' },
        { image: AssetsImage.portItem2, icon: AssetsImage.portItem2Icon, link: 'https://supernova.com.ph', alt: 'Supernova' },
        { image: AssetsImage.portItem3, icon: AssetsImage.portItem3Icon, link: 'https://bossjob.ph', alt: 'Bossjob' },
        { image: AssetsImage.portItem4, icon: AssetsImage.portItem4Icon, link: 'https://ccpayment.com', alt: 'Ccpayment' },
        { image: AssetsImage.portItem5, icon: AssetsImage.portItem5Icon, link: 'https://www.kily.ph', alt: 'Kily' },
    ]

    let aosDelayInc = 100;

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 50,
            duration: 600,
            delay: 100
        });
        AOS.refresh();
    }, []);

    return (
        <Section>
            <PageContainer>
                <ContentTextBlockWrapper>
                    <ContentTextBlock>
                        <ContentTextBlockTopContent>
                            <TitleMain data-aos="fade-right">{t("hero.title")}</TitleMain>
                            <TextMain data-aos="fade-right">{t("hero.description")}</TextMain>
                        </ContentTextBlockTopContent>

                        <ContentTextBlockBotContent className="content-text-block__bot-content" data-aos="fade-up">
                            <CorValueList>
                                <CorValueItem>
                                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 18.0001C23.183 19.0906 16.4359 26.3776 16.0261 35.2523L16 35.8183L15.9563 35.0609C15.4488 26.2697 8.73762 19.0939 -4.59355e-06 18.0001C8.73762 16.9062 15.4488 9.7304 15.9563 0.939206L16 0.181884L16.0261 0.747833C16.4359 9.62251 23.183 16.9096 32 18.0001Z" fill="#4E4DC9" />
                                    </svg>
                                    <p>{t("hero.corValue1.text")}</p>
                                </CorValueItem>
                                <CorValueItem>
                                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 18.0001C23.183 19.0906 16.4359 26.3776 16.0261 35.2523L16 35.8183L15.9563 35.0609C15.4488 26.2697 8.73762 19.0939 -4.59355e-06 18.0001C8.73762 16.9062 15.4488 9.7304 15.9563 0.939206L16 0.181884L16.0261 0.747833C16.4359 9.62251 23.183 16.9096 32 18.0001Z" fill="#4E4DC9" />
                                    </svg>
                                    <p>{t("hero.corValue2.text")} <br /> {t("hero.corValue2.text2")}</p>
                                </CorValueItem>
                                <CorValueItem>
                                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 18.0001C23.183 19.0906 16.4359 26.3776 16.0261 35.2523L16 35.8183L15.9563 35.0609C15.4488 26.2697 8.73762 19.0939 -4.59355e-06 18.0001C8.73762 16.9062 15.4488 9.7304 15.9563 0.939206L16 0.181884L16.0261 0.747833C16.4359 9.62251 23.183 16.9096 32 18.0001Z" fill="#4E4DC9" />
                                    </svg>
                                    <p>{t("hero.corValue3.text")}</p>
                                </CorValueItem>

                                <CorValueItem>
                                    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 18.0001C23.183 19.0906 16.4359 26.3776 16.0261 35.2523L16 35.8183L15.9563 35.0609C15.4488 26.2697 8.73762 19.0939 -4.59355e-06 18.0001C8.73762 16.9062 15.4488 9.7304 15.9563 0.939206L16 0.181884L16.0261 0.747833C16.4359 9.62251 23.183 16.9096 32 18.0001Z" fill="#4E4DC9" />
                                    </svg>
                                    <p>{t("hero.corValue4.text")}</p>
                                </CorValueItem>
                            </CorValueList>

                        </ContentTextBlockBotContent>
                    </ContentTextBlock>
                </ContentTextBlockWrapper>

                <ImageListBlock>
                    <PortList>
                        {
                            portfolioListData.map((item, index) => {
                                aosDelayInc += 100;

                                return (
                                    <PortListItem data-aos="fade-up" key={index} data-aos-delay={aosDelayInc}>
                                        <Link href={item.link} target="_blank">
                                            <LazyImageWrapper>
                                                <PortListImageMain className="PortListImageMain" src={item.image} alt={item.alt} />
                                            </LazyImageWrapper>

                                            <PortListIconImageWrap className="portListIconImageWrap">
                                                <img src={item.icon} alt={item.alt} />
                                            </PortListIconImageWrap>
                                        </Link>
                                    </PortListItem>
                                )
                            })
                        }
                    </PortList>
                </ImageListBlock>
            </PageContainer>
        </Section>
    );
}

export default Hero;

const Section = styled.section`
    
     ${deviceMedia.media768} {
        overflow: hidden; 
    }
    
`;
const ContentTextBlockWrapper = styled.div`
    position: relative;
    max-width: 465px;
    width: 100%;
    &:after {
        content: '';
        width: 1px;
        height:  100%;
        position: absolute;
        right: 0;
        top: 0;
        background-color: ${props => props.theme.black};
        
        ${deviceMedia.media768} {
            content: none;
        }
    }
    ${deviceMedia.media768} {
        top: 96px;
        height: 100%;
        position: static;
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`;
const ContentTextBlock = styled.div`
    height: max-content;

    position: sticky;
    top: 0;
    ${deviceMedia.media1024} {
        top: 96px;
    }
    ${deviceMedia.media768} {
        height: 100%;
        position: static;
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`;

const ContentTextBlockTopContent = styled.div`
    padding-top: 127px;
    padding-bottom: 65px;
    padding-right: 55px;
    position: relative;
    
    ${deviceMedia.media1440} {
        padding-top: calc(80px + (127 - 80) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
        padding-bottom: calc(40px + (65 - 40) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media768} {
        padding: 60px 0 52px;
    }
    
    &::after {
        content: '';
        position: absolute;
        width: 100vw;
        height: 1px;
        background-color: ${props => props.theme.black};
        bottom: 0;
        right: 0;
        
        ${deviceMedia.media768} {
            width: 150vw;
            right: -15%;
        }
    }
`;

const ContentTextBlockBotContent = styled.div`
    padding: 65px 0;
    position: relative;
    
    ${deviceMedia.media1440} {
        padding-top: calc(45px + (65 - 45) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
        padding-bottom: calc(45px + (65 - 45) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media768} {
        padding: 60px 0 52px;
        
        &::after {
            content: '';
            position: absolute;
            width: 100vw;
            height: 1px;
            background-color: ${props => props.theme.black};
            bottom: 0;
            right: 0;
            
            ${deviceMedia.media768} {
                width: 150vw;
                right: -15%;
            }
        }
    }
`;

const TitleMain = styled.h1`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 100px;
    line-height: 97%;
    text-transform: capitalize;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
    display: inline-block;
    
    ${deviceMedia.media1440} {
        font-size: calc(70px + (100 - 70) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media768} {
        font-size: 69px;
        margin-bottom: 24px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(50px + (69 - 50) * ((100vw - 320px) / (428 - 320)));
    }
    
    &:after {
        content: url(${AssetsImage.starTitle});
        position: absolute;
        right: -45px;
        z-index: -1;
        top: 50%;
        transform: translateY(-60%);
        
        ${deviceMedia.media768} {
            right: -75px;
        }
    }
`;

const TextMain = styled.p`
    font-size: 20px;
    line-height: 200%;
    max-width: 390px;
    width: 100%;
    
    ${deviceMedia.media1440} {
        font-size: calc(18px + (20 - 18) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media768} {
        font-size: 20px;
        max-width: 100%;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (428 - 320)));
    }
`;

const CorValueList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px -67px -12px;
`;

const CorValueItem = styled.div`
    width: calc(100% / 2);
    display: flex;
    padding: 0 12px;
    margin-bottom: 67px;
    
    ${deviceMedia.media1440} {
         margin-bottom: calc(50px + (67 - 50) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media768} {
        margin-bottom: 67px;
        align-items: center;
    }
    
    ${deviceMedia.media375} {
        width: 100%;
    }
                
    svg {
        flex-shrink: 0;
        margin-top: 3px;
        margin-right: 8px;
    }
    
    p {
        font-family: ${props => props.theme.PublicSansBold};
        font-size: 18px;
        line-height: 21px;
        letter-spacing: .2px;
        
        ${deviceMedia.media1440} {
            font-size: calc(15px + (18 - 15) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
        } 
        
        ${deviceMedia.media768} {
            font-size: 18px;
            max-width: 180px;
        }
    }
`;

const ImageListBlock = styled.div`
     padding: 0 0 0 16px;
     width: 100%;
     overflow: hidden;
     ${deviceMedia.media768} {
        padding: 30px 6px;
     }
`;

const PortList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -9px; 
    margin-bottom: 20px;
    position: relative;
    ${deviceMedia.media768} {
        margin: 0 -9px -18px -9px;
    }
`;

const PortListItem = styled.div`
    flex: 0 1 50%;
    padding: 0 9px;
    margin-top: 20px;
    overflow: hidden;
    height: 100%;
    
        
    ${deviceMedia.media640} {
        flex: 1 1 100%;
        height: 100%;
    }
                
    a {
        display: block;
        position: relative;
        padding-bottom: 110.6%;
        height: 100%;
        overflow: hidden;
        transition: transform .3s ease-in-out;
        
        &:before {
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.05);
            position: absolute;
            z-index: 1;
        }
                    
        &:hover {
           &:before {
                background-color: rgba(0, 0, 0, 0);
           }
            
            .PortListImageMain {
                transform: scale(1.05);
            }
            
            .portListIconImageWrap {
                transform: translateX(0);
            }
        }
    }
`;

const PortListImageMain = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform .3s ease-in-out;
    will-change: transform;
`;

const PortListIconImageWrap = styled.div`
    position: absolute;
    padding: 20px 55px 20px 20px;
    background-color: ${props => props.theme.white};
    bottom: 43px;
    left: 0;
    transform: translateX(-100%);
    transition: transform .2s ease-in-out;
    max-height: 129px;
    
    ${deviceMedia.media768} {
        transform: translateX(0);
    }
`;

const PageContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    padding: 0 55px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    position: relative;

    ${deviceMedia.media1440} {
        padding-left: calc(20px + (55 - 20) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
        // padding-right: calc(20px + (55 - 20) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media1024} {
        padding-left: 20px;
    }
    
    ${deviceMedia.media998} {
        padding-right: 20px;
    }
    
    ${deviceMedia.media768} {
        flex-direction: column;
        padding: 0
    }
    
    &::after {
        content: url(${AssetsImage.heroIconDown});
        position: absolute;
        right: 10px;
        bottom: 18px;
        
        ${deviceMedia.media998} {
            content: none;
        }
    }
`;