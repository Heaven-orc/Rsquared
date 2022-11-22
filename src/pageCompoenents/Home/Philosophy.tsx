import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import Link from "next/link";
import { deviceMedia } from "../../common/media";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const Philosophy = () => {
    const { t } = useTranslation('r2Home');

    return (
        <Section>
            <PageContainer>
                <InnerL>
                    <InnerLImageWrap>
                        <LazyImageWrapper>
                            <img src={AssetsImage.philHome} alt="photo" />
                        </LazyImageWrapper>
                    </InnerLImageWrap>

                    <InnerLTextBoxWrap>
                        <InnerLTitle data-aos="fade-right">{t("home.phil.title.bot.text")}</InnerLTitle>
                        <InnerLText data-aos="fade-right">{t("home.phil.bot.text")}</InnerLText>
                    </InnerLTextBoxWrap>
                </InnerL>

                <InnerR>
                    <InnerRTop data-aos="fade-left">
                        <InnerRTitle>{t("home.phil.title.top.text1")} <svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.314 73.246L28.8612 47.4684L0.736126 36.7362L30.5834 32.8194L21.4385 4.13891L43.1102 25.0324L59.8318 0.000639204L57.0087 29.9711L87.005 27.4375L61.813 43.9166L82.4962 65.7891L53.9054 56.3677L49.7006 86.1757L39.2404 57.9484L13.314 73.246Z" fill="black" />
                        </svg>
                            {t("home.phil.title.top.text2")}</InnerRTitle>
                    </InnerRTop>

                    <InnerRBot>
                        <StyledLink href='https://0rjzg131cmn.typeform.com/to/Tghyn9CD' target="_blank" data-aos="fade-left">
                            <div className="link-text-wrap">
                                <span>{t('home.phil.link.text1')}</span><span>{t('home.phil.link.text2')}</span>
                            </div>

                            <div className="link-icon-wrap">
                                <LazyImageWrapper>
                                    <img width="121" height="121" src={AssetsImage.submitPhil} alt="icon" />
                                    <img width="151" height="192" src={AssetsImage.subArrowPhil} alt="icon" />
                                </LazyImageWrapper>
                            </div>
                        </StyledLink>
                    </InnerRBot>
                </InnerR>
            </PageContainer>
        </Section>
    );
}

export default Philosophy;

const Section = styled.section`
    background-color: ${props => props.theme.sky};
    padding-top: 62px;
    position: relative;
    overflow: hidden;
    
    ${deviceMedia.media640} {
        padding-top: 50px;
        padding-bottom: 26px;
    }
    
    &:before {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.black};
        position: absolute;
        left: 0;
        top: 62px;
        
        ${deviceMedia.media640} {
            top: 50px;
        }
    }
`;

const PageContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    padding: 0 47px;
    display: flex;
    
    ${deviceMedia.media1440} {
        padding-left: calc(20px + (47 - 20) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
        padding-right: calc(20px + (47 - 20) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media1024} {
        padding: 0 20px;
    }
    
    ${deviceMedia.media640} {
        flex-direction: column;
    }
`;

const InnerL = styled.div`
    max-width: 588px;
    width: 73%;
    
    ${deviceMedia.media768} {
        width: 85%;
    }
    
    ${deviceMedia.media640} {
        width: 100%;
        margin-top: 26px;
    }
`;

const InnerR = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 709px;
    width: 100%;
`;

const InnerRTitle = styled.h2`
    max-width: 659px;
    width: 100%;
    font-family: ${props => props.theme.PublicSansBlack};
    font-size: 64px;
    line-height: 128%;
    letter-spacing: .2px;
    text-transform: uppercase;
            
    ${deviceMedia.media1440} {
       font-size: 4.45vw;
    }
    
    ${deviceMedia.media998} {
        width: 92%;
        font-size: 4vw;
    }
    
    ${deviceMedia.media640} {
        width: 100%;
        font-size: 54px;
        position: relative;
        max-width: 388px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(35px + (54 - 35) * ((100vw - 320px) / (428 - 320)));
    }
    
    svg {
        margin-left: 20px;
        transform-origin: 50% 50%;
        animation: rotate-star 5s infinite;
        animation-timing-function: linear;
        position: relative;
        top: 20px;
        
        @keyframes rotate-star {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        ${deviceMedia.media998} {
            margin-left: 10px;
            width: 66px;
            height: 66px;
            top: 10px;
            
            @keyframes rotate-star {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        }
        
        ${deviceMedia.media640} {
            width: 71px;
            height: 71px;
            right: 18px;
            position: absolute;
            top: 0;
            
            @keyframes rotate-star {
                0%   { transform: rotate(0deg); }
                100% { transform: rotate(360deg);  }
            }
        }
        
        ${deviceMedia.media330} {
            top: -15px;
            right: 0;
        }
    }
`;

const InnerRTop = styled.div`
    min-height: 386px;
    padding-left: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
                        
    ${deviceMedia.media1440} {
        padding-left: 3.5vw;
        padding-top: 3vw;
        padding-bottom: 3vw;
        min-height: calc(350px + (386 - 350) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media1024} {
        padding-left: 30px;
    }
    
    ${deviceMedia.media640} {
        padding: 37px 0 32px;
        min-height: auto;
        justify-content: center;
    }
`;

const InnerRBot = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    background-color: ${props => props.theme.black};
    position: relative;
    padding-left: 60px;
    
    ${deviceMedia.media1024} {
        padding-left: 30px;
    }
    
    ${deviceMedia.media768} {
        justify-content: center;
    }
    
    ${deviceMedia.media640} {
        padding: 42px 0 46px;;
    }
            
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        right: -100%;
        top: 0;
        background-color: ${props => props.theme.black};
        
        ${deviceMedia.media640} {
            content: none;
        }
    }
`;

const InnerLTitle = styled.p`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 48px;
    line-height: 53px;
    text-transform: capitalize;
    margin-bottom: 35px;
    
    ${deviceMedia.media1440} {
       font-size: calc(40px + (48 - 40) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
       margin-bottom: calc(15px + (35 - 15) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media640} {
        font-size: 44px;
        margin-bottom: 24px;
    }
    
    ${deviceMedia.media428} {
       font-size: calc(30px + (44 - 30) * ((100vw - 320px) / (428 - 320)));
    }
`;

const InnerLText = styled.p`
    font-size: 20px;
    line-height: 160%;
    letter-spacing: .2px;
    
    ${deviceMedia.media1440} {
        font-size: calc(18px + (20 - 18) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media640} {
        font-size: 20px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(17px + (20 - 17) * ((100vw - 320px) / (428 - 320)));
    }
`;

const InnerLTextBoxWrap = styled.div`
    padding: 66px 25px;
    position: relative;
    
    ${deviceMedia.media1440} {
        padding-top: calc(40px + (60 - 40) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
        padding-bottom: calc(40px + (60 - 40) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media640} {
        padding: 51px 22px 36px 26px;
        border: 1px solid ${props => props.theme.black};
    }
            
    &:before {
       content: '';
       position: absolute;
       width: 100%;
       height: 100%;
       left: -100%;
       top: 0;
       background-color: ${props => props.theme.black};
       
       ${deviceMedia.media640} {
            content: none;
        }
    }
`;

const InnerLImageWrap = styled.div`
    min-height: 386px;
    border: 1px solid ${props => props.theme.black};  
    position: relative;
    
    ${deviceMedia.media1440} {
        min-height: calc(350px + (386 - 350) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media640} {
        min-height: 386px;
    }
    
    ${deviceMedia.media428} {
        min-height: calc(280px + (386 - 280) * ((100vw - 320px) / (428 - 320)));
    }
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.PublicSansBlack};
    font-size: 48px;
    line-height: 82px;
    letter-spacing: .2px;
    text-transform: uppercase;
    color: ${props => props.theme.lime};
    
    ${deviceMedia.media1440} {
        font-size: calc(30px + (48 - 30) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media768} {
        flex-direction: column;
        line-height: 50px;
        font-size: 25px;
    }
    
    ${deviceMedia.media640} {
        font-size: 32px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(22px + (32 - 22) * ((100vw - 320px) / (428 - 320)));
    }
  
    span,
    svg,
    .link-icon-wrap img:nth-child(2) {
        transition: .2s ease-in-out;
    }
    
    span {
        &:nth-child(2) {
            padding: 0 10px;
            margin-left: 2px;
            z-index: 0;
            position: relative;
            
            &:before {
                content: '';
                position: absolute;
                z-index:-1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: ${props => props.theme.lime};
                transform: scaleX(0);
                transform-origin: 0 50%;
                transition: transform .2s ease-in-out;
            }
        }  
    }
    
    &:hover {
        span {
            &:nth-child(2) {
                color: ${props => props.theme.black};
                
                &:before {
                    transform: scaleX(1);
                }
            }  
        }
        
        .link-icon-wrap {           
            img {
                &:nth-child(1) {
                    filter: grayscale(0);
                    transform: translateX(-12px);
                }
                
                &:nth-child(2) {
                    right: -60px;
                    
                    ${deviceMedia.media768} {
                        right: -45px;
                    }
                }
            }
        }
    }
    
    .link-text-wrap {
        display: flex;
    }
    
    .link-icon-wrap {
        position: relative;
        display: flex;
        // margin-left: 18px;
        margin-left: 30px;
        flex-shrink: 0;
        
        ${deviceMedia.media768} {
            margin: 0;
            margin-top: 30px;
            transform: translateX(-20%);
            width: 97px;
        }
        
        ${deviceMedia.media640} {
            width: 87px;
        }
        
        img {
            &:nth-child(1) {
                position: relative;
                z-index: 1;
                filter: grayscale(0.6);
                transform: translateX(0);
                transition: transform .3s ease-in-out;
                will-change: transform;
            }
            
            &:nth-child(2) {
                position: absolute;
                top: 50%;
                right: -45px;
                transform: translateY(-50%);
                
                ${deviceMedia.media768} {
                    right: -37px;
                }
                
                ${deviceMedia.media640} {
                    right: -30px;
                }
            }
        }
    }
`;