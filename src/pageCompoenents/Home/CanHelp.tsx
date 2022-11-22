import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import Link from "next/link";
import { deviceMedia } from "../../common/media";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

interface canHelpType {
    title: string;
    text: string;
    icon: string;
}

const CanHelp = () => {
    const { t } = useTranslation('r2Home');

    const canHelpListData: canHelpType[] = [
        { title: t('canHelp.list.item1.title'), text: t('canHelp.list.item1.text'), icon: AssetsImage.canHItem1 },
        { title: t('canHelp.list.item2.title'), text: t('canHelp.list.item2.text'), icon: AssetsImage.canHItem2 },
        { title: t('canHelp.list.item3.title'), text: t('canHelp.list.item3.text'), icon: AssetsImage.canHItem3 },
        { title: t('canHelp.list.item4.title'), text: t('canHelp.list.item4.text'), icon: AssetsImage.canHItem4 },
        { title: t('canHelp.list.item5.title'), text: t('canHelp.list.item5.text'), icon: AssetsImage.canHItem5 },
        { title: t('canHelp.list.item6.title'), text: t('canHelp.list.item6.text'), icon: AssetsImage.canHItem6 },
    ]

    let aosDelay = 100;

    return (
        <Section>
            <PageContainer>
                <SectionTitle data-aos="fade-up">{t("canHelp.section.title")}</SectionTitle>
                <SectionDesc data-aos="fade-left" >{t("canHelp.section.desc.p1")} <strong>{t("canHelp.section.desc.p2")}</strong>{t("canHelp.section.desc.p3")}</SectionDesc>
                <BannerTop data-aos="fade-up"></BannerTop>
            </PageContainer>

            <CHList>
                {
                    canHelpListData.map((item, index) => {
                        aosDelay += 100;

                        return (
                            <CHListItem key={index}>
                                <CHListItemInner data-aos="fade-up" data-aos-delay={aosDelay}>
                                    <LazyImageWrapper>
                                        <img width="52" height="52" src={item.icon} alt={item.title} />
                                    </LazyImageWrapper>
                                    <CHListTitle>{item.title}</CHListTitle>
                                    <CHListText>{item.text}</CHListText>
                                </CHListItemInner>
                            </CHListItem>
                        )
                    })
                }
                <CHListLinkWrap className="ch-list__link-wrap">
                    <StyledLink href='https://0rjzg131cmn.typeform.com/to/Tghyn9CD' target="_blank" data-aos="fade-left">
                        <span>{t('canHelp.sub.btn')}</span>

                        <LazyImageWrapper>
                            <img width="24" height="24" src={AssetsImage.dorArrRight} alt="arr-right" />
                        </LazyImageWrapper>
                    </StyledLink>
                </CHListLinkWrap>
            </CHList>
        </Section>
    );
}

export default CanHelp;

const CHList = styled.div`
    margin-top: 58px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // border-top: 1px solid ${props => props.theme.black};
    // border-bottom: 1px solid ${props => props.theme.black};
    position: relative;
    max-width: 1440px;
    margin: 58px auto 0;
    
    &:before {
        content: '';
        width: 100vw;
        height: 1px;
        background-color: black;
        position: absolute;
        top: 0;
    }
    
    ${deviceMedia.media640} {
        margin: 24px auto 0;
    }
`;

const CHListItem = styled.div`
    width: calc(100% / 3);
    // max-width: 480px;
    min-height: 350px;
    padding-top: 73px;
    padding-bottom: 73px;
    display: flex;
    justify-content: center;
    // border-bottom: 1px solid ${props => props.theme.black};
    border-left: 1px solid ${props => props.theme.black};
    padding-left: 20px;
    padding-right: 20px;
    
    ${deviceMedia.media998} {
        width: calc(100% / 2);
        border-bottom: 1px solid ${props => props.theme.black};
        
        &:nth-child(2n+1) {
            border-left: none;
        }
        
        &:nth-child(2n+1) {
            border-left: none;
        }
    }
    
    ${deviceMedia.minMedia998} {
        &:nth-child(n + 4) {
        border-bottom: none;
        position: relative;
        
            &:before {
                content: '';
                width: 100vw;
                height: 1px;
                background-color: black;
                position: absolute;
                top: 0;
            }
        }
            
        &:nth-child(3n + 1) {
            border-left: none; 
        }
    }
    
    ${deviceMedia.media640} {
        width: calc(100% / 1);
        border-left: none;
        min-height: auto;
        padding: 73px 20px;
    }     

`;

const CHListItemInner = styled.div`
    max-width: 249px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    img {
        margin-bottom: 12px;
    }
`;

const CHListLinkWrap = styled.div`
    height: 150px;
    width: calc(100% / 3);
    margin-left: auto;
    border-left: 1px solid ${props => props.theme.black};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.catsCream};
    position: relative;
    
    ${deviceMedia.media998} {
        width: calc(100% / 2);
    }
    
    ${deviceMedia.media640} {
        width: 100%;
        border-left: none;
    }
    
    &:before {
        content: '';
        width: 200vw;
        height: 1px;
        background-color: black;
        position: absolute;
        top: 0;
        right: -100vw;
        z-index: 1;
        
        ${deviceMedia.media998} {
            content: none;
        }
    }
    
    &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${props => props.theme.catsCream};
        right: -100%;
        z-index: 0;
    }
`;

const CHListTitle = styled.p`
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 20px;
    line-height: 160%;
    letter-spacing: .2px;
    margin-bottom: 12px;
`;

const CHListText = styled.p`
    font-family: ${props => props.theme.PublicSansLight};
    font-size: 16px;
    line-height: 200%;
    letter-spacing: .2px;
`;

const Section = styled.section`
    padding-top: 76px;
    background-color: #f0f0f0;
    overflow: hidden;
    
    ${deviceMedia.media640} {
        padding-top: 60px;
    }
`;

const PageContainer = styled.div`
     width: min(100%, ${props => props.theme.maxWidth});
     margin: 0 auto;
     padding: 0 39px;
     
     ${deviceMedia.media768} {
        padding: 0 20px;
     }
`;

const SectionTitle = styled.h2`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 64px;
    line-height: 70px;
    text-transform: capitalize;
    margin-bottom: 12px;
    padding-left: 24px;
    position: relative;
    z-index: 1;
    
    ${deviceMedia.media1440} {
        font-size: calc(55px + (64 - 55) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media640} {
        font-size: 56px;
        line-height: 92px;
        padding-left: 0;
        margin-bottom: 40px;
    }
    
    &:before {
        content: url(${AssetsImage.decorLine});
        position: absolute;
        z-index: -1;
        left: 75px;
        top: 21px;
        
        ${deviceMedia.media640} {
            left: 25px;
            top: 50px;
        }
    }
`;

const BannerTop = styled.div`
   background-image: url(${AssetsImage.bannerTop});
   background-size: cover;
   border-radius: 10px;
   overflow: hidden;
   padding-bottom: 26.1%;
   margin-top: 20px;
   
   ${deviceMedia.media998} {
        padding-bottom: 30.1%;
   }
   
   ${deviceMedia.media640} {
        background-image: url(${AssetsImage.bannerTopMob});
        padding-bottom: 64.1%;
   }
`;

const SectionDesc = styled.p`
    font-family: ${props => props.theme.PublicSansLight};
    font-size: 24px;
    line-height: 133%;
    text-align: right;
    letter-spacing: .2px;
    max-width: 677px;
    width: 52%;
    margin-left: auto;
    position: relative;
    z-index: 1;
    
    ${deviceMedia.media1440} {
        font-size: calc(20px + (24 - 20) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media1024} {
        width: 60%;
    }
    
    ${deviceMedia.media640} {
        font-size: 24px;
        line-height: 32px;
        width: 100%;
        margin-bottom: 40px;
    }
    
    ${deviceMedia.media428} {
         font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (428 - 320)));
    }
    
    strong {
        font-family: ${props => props.theme.PublicSansBold};
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 16px;
    line-height: 30px;
    letter-spacing: .2px;
    text-transform: uppercase;
  
    span,
    img {
        transition: .2s ease-in-out;
    }
    
    span {
        border-left: 1px solid ${props => props.theme.black};
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
            background: ${props => props.theme.black};
            transform: scaleX(0);
            transform-origin: 0 50%;
            transition: transform .2s ease-in-out;
        }
    }
    
    &:hover {
        span {
            color: ${props => props.theme.lime};
            border-radius: 2px;
            display: flex;
            
            &:before {
                transform: scaleX(1);
            }
        }
        
        img {
            transform: translateX(5px);
        }
    }
`;