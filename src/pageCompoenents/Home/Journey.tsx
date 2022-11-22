import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import { deviceMedia } from "../../common/media";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const Journey = () => {
    const { t } = useTranslation('r2Home');

    return (
        <Section>
            <PageContainer>
                <JourneyBox>
                    <JourneyList data-aos="fade-right">
                        <JourneyListItem>
                            <JourneyListItemBox className="j-list-item-box">
                                <JourneyListTitle>{t("journey.road.item1.title")}</JourneyListTitle>
                                <JourneyListText className="j-list-text">{t("journey.road.item1.text")}</JourneyListText>
                            </JourneyListItemBox>
                        </JourneyListItem>
                        <JourneyListItem>
                            <JourneyListItemBox className="j-list-item-box">
                                <JourneyListTitle>{t("journey.road.item2.title")}</JourneyListTitle>
                                <JourneyListText className="j-list-text">{t("journey.road.item2.text")} <strong>$50,000 - $120,000</strong></JourneyListText>
                            </JourneyListItemBox>
                        </JourneyListItem>
                        <JourneyListItem>
                            <JourneyListItemBox className="j-list-item-box">
                                <JourneyListTitle>{t("journey.road.item3.title")}</JourneyListTitle>
                                <JourneyListText className="j-list-text">{t("journey.road.item3.text.part1")} <strong>{t("journey.road.item3.text.part2")}</strong> {t("journey.road.item3.text.part3")}</JourneyListText>
                            </JourneyListItemBox>
                        </JourneyListItem>
                        <JourneyListItem>
                            <JourneyListItemBox className="j-list-item-box">
                                <JourneyListTitle>{t("journey.road.item4.title")}</JourneyListTitle>
                                <JourneyListText className="j-list-text">{t("journey.road.item4.text.part1")}<br />
                                    {t("journey.road.item4.text.part2")} <strong>$200,000</strong></JourneyListText>
                            </JourneyListItemBox>
                        </JourneyListItem>
                        <JourneyListItem>
                            <JourneyListItemBox className="j-list-item-box">
                                <JourneyListTitle>{t("journey.road.item5.title")}</JourneyListTitle>
                                <JourneyListText className="j-list-text">{t("journey.road.item5.text.part1")}<br />
                                    <strong>{t("journey.road.item5.text.part2")}</strong></JourneyListText>
                            </JourneyListItemBox>
                        </JourneyListItem>
                    </JourneyList>
                </JourneyBox>

                <TextBox>
                    <TextBoxContent data-aos="fade-left">
                        <TextBoxTitle>{t("journey.text.box.title")}</TextBoxTitle>
                        <TextBoxText>{t("journey.text.box.text")}</TextBoxText>
                    </TextBoxContent>

                    <LazyImageWrapper>
                        <StarImg src={AssetsImage.starJourney} alt="star" />
                    </LazyImageWrapper>
                </TextBox>
            </PageContainer>

        </Section>
    );
}

export default Journey;

const Section = styled.section`
     overflow: hidden;
     border-bottom: 1px solid ${props => props.theme.black};
`;

const PageContainer = styled.div`
     width: min(100%, ${props => props.theme.maxWidth});
     margin: 0 auto;
     display: flex;
     
     ${deviceMedia.media640} {
        flex-direction: column;
     }
`;

const JourneyBox = styled.div`
    max-width: 837px;
    width: 65%;
    background: ${props => props.theme.snowflake};
    height: 100%;
    position: relative;
    z-index: 1;
    padding-right: 130px;
    padding-left: 55px;
    
    ${deviceMedia.media1440} {
        padding-right: calc(30px + (130 - 30) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
        padding-left: calc(30px + (55 - 30) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media640} {
        order: 1;
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    }
    
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: -99%;
        top: 0;
        background: ${props => props.theme.snowflake};
        z-index: -1;
    }
`;

const TextBox = styled.div`
    padding-left: 92px;
    padding-right: 30px;
    max-width: 603px;
    width: 45%;
    background: ${props => props.theme.catsCream};
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    
    ${deviceMedia.media1440} {
        padding-left: calc(30px + (92 - 30) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media640} {
        padding-left: 20px;
        padding-right: 18px;
        padding-bottom: 142px;
        padding-top: 60px;
        width: 100%;
        max-width: 100%;
    }
    
    &:after {
        content: '';
        position: absolute;
        width: 100vw;
        height: 100%;
        left: 0;
        top: 0;
        background: ${props => props.theme.catsCream};
        z-index: -1;
    }
    
    &:before {
        content: url(${AssetsImage.circleArrDown});
        position: absolute;
        right: 66px;
        bottom: 89px;
        
        ${deviceMedia.media640} {
            bottom: 35px;
            left: 20px;
            right: auto;
        }
    }
`;

const TextBoxContent = styled.div`
    position: relative;
    z-index: 1;
    max-width: 390px;
    width: 100%;
    
    ${deviceMedia.media640} {
        max-width: 100%;
    }
`;

const StarImg = styled.img`
    position: absolute;
    top: -43px;
    right: -67px;
    pointer-events: none;
    
    ${deviceMedia.media640} {
        width: 271px;
        top: -40px;
        left: -64px;
        right: auto;
    }
`;

const TextBoxTitle = styled.h2`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 64px;
    line-height: 144%;
    text-transform: capitalize;
    margin-bottom: 21px;
    
    ${deviceMedia.media1440} {
        font-size: calc(40px + (64 - 40) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media640} {
        font-size: 64px;
        margin-bottom: 40px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(46px + (64 - 46) * ((100vw - 320px) / (428 - 320)));
    }
`;

const TextBoxText = styled.p`
    font-size: 36px;
    line-height: 161%;
    letter-spacing: 0.2px;
    
    ${deviceMedia.media1440} {
        font-size: calc(23px + (36 - 23) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media640} {
        font-size: 36px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(28px + (36 - 26) * ((100vw - 320px) / (428 - 320)));
    }
`;

const JourneyList = styled.ul`
    max-width: 570px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    position: relative;
    padding-top: 17px;
    padding-bottom: 36px;
    
    ${deviceMedia.media640} {
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 78px
    }
        
    &:before {
        content: '';
        position: absolute;
        width: 1px;
        top: 0;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${props => props.theme.black};
    }
`;

const JourneyListItem = styled.li`
    display: flex;
    margin-bottom: 23px;
             
    &:last-child {
        margin-bottom: 0;
    }
             
    &:nth-child(even) {
        justify-content: flex-end;
                
        .j-list-item-box {
            border-right: 1px solid ${props => props.theme.black};
            border-left: none;
        }
        
        .j-list-text {
            padding-left: 31px;
            
            &:after {
                content: url(${AssetsImage.starJourneyItem2});
                right: auto;
                left: 0;
                transform: translateX(-50%);
            }
        }
    }
`;

const JourneyListItemBox = styled.div`
    width: 50%;
    border: 1px solid ${props => props.theme.black};
    border-radius: 2px;
    border-right: none;
`;

const JourneyListTitle = styled.p`
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 16px;
    line-height: 200%;
    letter-spacing: .2px;
    text-align: center;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
    padding: 3px 5px 5px;
`;

const JourneyListText = styled.p`
    padding: 14px 24px 21px;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: .2px;
    position: relative;
    
    ${deviceMedia.media1440} {
        font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media640} {
        font-size: 18px;
        padding: 10px 16px 9px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(15px + (18 - 15) * ((100vw - 320px) / (428 - 320)));
    }
    
    &:after {
        content: url(${AssetsImage.starJourneyItem});
        position: absolute;
        top: 10px;
        right: 0;
        transform: translateX(50%);
    }
`;