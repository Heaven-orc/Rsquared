import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import Link from "next/link";
import { deviceMedia } from "../../common/media";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const Portfolio = () => {
    const { t } = useTranslation('r2Home');

    return (
        <Section>
            <PageContainer>
                <TextBlock>
                    <TextBlockInner data-aos="fade-up">
                        <SectionTitle>{t('select.port.title')}</SectionTitle>
                        <SectionDesc>{t('select.port.text.p1')} <strong>{t('select.port.text.p2')}</strong></SectionDesc>
                    </TextBlockInner>

                    <TextBlockLinkWrap>
                        <div data-aos="fade-up">
                            <StyledLink href='/portfolio' target="_self">
                                <span>{t('select.port.link.text')}</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect width="24" height="24" rx="12" fill="#86EDA9" />
                                    <path d="M7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5V11.5ZM16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L13.1716 8.46447C12.9763 8.2692 12.6597 8.2692 12.4645 8.46447C12.2692 8.65973 12.2692 8.97631 12.4645 9.17157L15.2929 12L12.4645 14.8284C12.2692 15.0237 12.2692 15.3403 12.4645 15.5355C12.6597 15.7308 12.9763 15.7308 13.1716 15.5355L16.3536 12.3536ZM7 12.5L16 12.5V11.5L7 11.5V12.5Z" fill="black" />
                                </svg>
                            </StyledLink>
                        </div>

                    </TextBlockLinkWrap>
                </TextBlock>

                <ImageBlock>
                    <PortList data-aos="fade-left">
                        <PortListItem>
                            <PortListInner href="/portfolio" target="_self">
                                <LazyImageWrapper>
                                    <img src={AssetsImage.portHome1} alt="portfolio-cwallet" />
                                </LazyImageWrapper>
                            </PortListInner>
                        </PortListItem>

                        <PortListItem>
                            <PortListInner href="/portfolio" target="_self">
                                <LazyImageWrapper>
                                    <img src={AssetsImage.portHome2} alt="portfolio-cpayment" />
                                </LazyImageWrapper>
                            </PortListInner>
                        </PortListItem>
                    </PortList>
                </ImageBlock>
            </PageContainer>
        </Section>
    );
}

export default Portfolio;

const Section = styled.section`
    background-color: ${props => props.theme.magenta};
    overflow: hidden;
`;

const PageContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    display: flex;
    
    ${deviceMedia.media998} {
        flex-direction: column;
    }
`;

const ImageBlock = styled.div`
    padding: 22px 25px;
    // width: 62.7%;
    width: 63.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    ${deviceMedia.media998} {
        width: 100%;
        padding: 20px;
    }
    
    ${deviceMedia.media640} {
        padding: 30px 20px;
    }
`;

const PortList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12.5px;
    height: 100%;
`;

const PortListItem = styled.div`
    width: calc(100% / 2);
    padding: 0 12.5px;
     
    ${deviceMedia.media500} {
        width: 100%;
        margin-bottom: 24px;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const PortListInner = styled(Link)`
    position: relative;
    display: block;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.white};
    overflow: hidden;
    
    img {
        transform: scale(1);
        transition: .3s ease-in-out;
    }
            
    &:hover {
        &:before {
            background-color: rgba(0, 0, 0, 0);
        }
        
        img {
            transform: scale(1.1);
        }
    }
            
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .2);
        z-index: 1;
        transition: .1s ease-in-out;
    }
`;

const TextBlock = styled.div`
        max-width: 530px;
        width: 50%;
        border-right: 1px solid ${props => props.theme.black};
        padding-left: 60px;
        padding-right: 70px;
        
        ${deviceMedia.media1440} {
            padding-left: 4.2vw;
            padding-right: 4.9vw;
        }
        
        ${deviceMedia.media998} {
            border-right: none;
            padding: 0 20px;
            width: 100%;
        }
`;

const TextBlockInner = styled.div`
    padding-top: 70px;
    color: ${props => props.theme.white};
    max-width: 399px;
    margin-left: auto;
    width: 100%;
            
    ${deviceMedia.media1440} {
        padding-top: 4.9vw;
    }
    
    ${deviceMedia.media998} {
        margin-left: 0;
        max-width: 100%;
        padding-top: 60px;
    }
`;

const SectionTitle = styled.h2`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 30px;
    
    ${deviceMedia.media1440} {
        font-size: calc(40px + (48 - 40) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media640} {
        font-size: 46px;
    }
    
    ${deviceMedia.media428} {
       font-size: calc(34px + (46 - 34) * ((100vw - 320px) / (428 - 320)));
    }
`;

const SectionDesc = styled.p`
    padding-right: 5px;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: .2px;
    margin-bottom: 70px;
    
    ${deviceMedia.media1440} {
        margin-bottom: 4.9vw;
    }
    
    ${deviceMedia.media998} {
        margin-bottom: 34px;
    }
    
    ${deviceMedia.media428} {
       font-size: calc(18px + (20 - 18) * ((100vw - 320px) / (428 - 320)));    
    }
                
    strong {
        font-family: ${props => props.theme.PublicSansBold};
    }
`;

const TextBlockLinkWrap = styled.div`
    display: flex;
    position: relative;
    max-width: 399px;
    margin-left: auto;
    width: 100%;
    
    ${deviceMedia.media998} {
        margin-left: 0;
        
       &:after {
            content: '';
            position: absolute;
            width: 200vw;
            height: 1px;
            left: -100%;
            background-color: ${props => props.theme.black};
            bottom: 1px;
       }
    }
    
            
    &:before {
        content: '';
        position: absolute;
        width: 100vw;
        height: 1px;
        right: -70px;
        background-color: ${props => props.theme.black};
                
        ${deviceMedia.media1440} {
             right: -4.9vw;
        }
        
        ${deviceMedia.media998} {
            width: 200vw;
            left: -100%;
        }
    }
            
    a {
        display: flex;
        margin: 60px 0;
                
        ${deviceMedia.media1440} {
             margin: 4.2vw 0;
        }
        
        ${deviceMedia.media998} {
            margin: 40px 0;
        }
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 18px;
    line-height: 30px;
    letter-spacing: .2px;
    text-transform: uppercase;
    color: ${props => props.theme.white};
  
    span,
    svg {
        transition: .2s ease-in-out;
    }
    
    span {
        padding: 0 10px;
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
    
    &:hover {
        span {
            color: ${props => props.theme.black};
            border-radius: 2px;
            display: flex;
            
            &:before {
                transform: scaleX(1);
            }
        }
        
        svg {
            transform: translateX(8px);
            
            rect {
                fill: ${props => props.theme.black};
            }   
             
            path {
               fill: ${props => props.theme.lime};
            }
        }
    }
`;