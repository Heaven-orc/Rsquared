import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { deviceMedia } from 'common/media';
import { IMobileValues } from 'pageCompoenents/Home/types';
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const MobileValues = ({ values }: IMobileValues) => {
    const { t } = useTranslation('r2Home');

    return (
        <>
            <Section>
                {values.map((elem, idx) =>
                    <InnerContainer key={elem.id}>
                        <Top>
                            <TitleWrapper>
                                <LazyImageWrapper>
                                    <Icon src={elem.icon} alt={`icon for ${elem.title}`} />
                                </LazyImageWrapper>
                                <Title dangerouslySetInnerHTML={{ __html: elem.title }} />
                            </TitleWrapper>
                            <Description dangerouslySetInnerHTML={{ __html: elem.description }} />
                        </Top>
                        <Bottom>
                            <ImageWrapper>
                                <LazyImageWrapper>
                                    <Image even={!(idx % 2)} src={elem.img} alt={`image for ${elem.title}`} />
                                </LazyImageWrapper>
                            </ImageWrapper>
                        </Bottom>
                    </InnerContainer>
                )}
            </Section>

        </>
    );
}

export default MobileValues;

const Section = styled.section`
    position: relative;
    height: 100%;
    overflow: hidden;
`;
const InnerContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    padding: 58px 0 75px;
`;
const Top = styled.section`
    position: relative;
    height: 100%;
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    padding: 0 55px ;
    margin-bottom: 20px;
    ${deviceMedia.media1440} {
        padding: 0 20px ;
        padding: 0
        calc(20px + (55 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        ;
    }
`;
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;
const Title = styled.h3`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 48px;
    text-transform: capitalize;
    color: #030303;
    ${deviceMedia.media428} {
        font-size: 14px;
        font-size: calc(0px + (48 - 0) * ((100vw - 0px ) / (428)));
    }
`;
const Icon = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 27px;
    background: rgba(111, 201, 255, 0.7);
    border-radius: 30px;
    ${deviceMedia.media428} {
        width: 20px;
        height: 20px;
        margin-right: 17px;
        width: calc(0px + (60 - 0) * ((100vw - 0px ) / (428)));
        height: calc(0px + (60 - 0) * ((100vw - 0px ) / (428)));
        margin-right: calc(0px + (17 - 0) * ((100vw - 0px ) / (428)));

    }
`;
const Description = styled.div`
    font-family: ${props => props.theme.PublicSansRegular};
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.2px;
    color: ${props => props.theme.black};
    ${deviceMedia.media428} {
        font-size: 14px;
        font-size: calc(0px + (20 - 0) * ((100vw - 0px ) / (428)));
    }
`;
const Bottom = styled.div`
   max-width: 420px;
   width: 100%;
   margin: 0 auto;
   padding-top: 34px ;

`;
const ImageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    width: 275px;
    height: 280px;
    ${deviceMedia.media428} {
        width: 100px;
        height: 100px;
        width: calc(0px + (275 - 0) * ((100vw - 0px ) / (428)));
        height: calc(0px + (280 - 0) * ((100vw - 0px ) / (428)));
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -30px;
        left: -42px;
        background-repeat: no-repeat;
        background-position: 0% 100%;
        background-size: 89% 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='631' height='178' viewBox='0 0 631 178' fill='none'%3E%3Cpath d='M14 31.473C14.1127 93.5071 476.365 -58.0226 185.977 61.4188C-177.008 210.721 723.852 -71.5336 381.67 80.1004C39.4884 231.735 512.644 135.931 617.317 117.515' stroke='%236FC9FF' stroke-width='27' stroke-linecap='round'/%3E%3C/svg%3E");
        width: 420px;
        height: 110px;
        ${deviceMedia.media428} {
            width: 100px;
            width: calc(0px + (420 - 0) * ((100vw - 0px ) / (428)));
        }
    }
    &:before {
        content: '';
        display: block;
        width: 95%;
        height:100%;
        background: #4E4DC9;
        border-radius: 30px;
        position: absolute;
        ${deviceMedia.media1440} {
            border-radius: 20px;
            border-radius: calc(20px + (30 - 20) * ((100vw - 0px ) / (428)));
        } 
    }
`;
interface IImage {
    even: boolean
}
const Image = styled.img<IImage>`
    margin: 0 auto;
    object-fit: cover;
    position: absolute;
    bottom: 25px;
    left: 25px;
    border-radius: 30px;
    z-index: 1;
    background: #D9D9D9;
    ${deviceMedia.media1440} {
        border-radius: 20px;
        border-radius: calc(20px + (30 - 20) * ((100vw - 0px ) / (428)));
    } 
    ${props => props.even
        ? `  
        width: 255px;
        height: 288px;
        ${deviceMedia.media428} {
            width: calc(0px + (255 - 0) * ((100vw - 0px ) / (428)));
            height: calc(0px + (288 - 0) * ((100vw - 0px ) / (428)));
            bottom: calc(0px + (25 - 0) * ((100vw - 0px ) / (428)));
            left: calc(0px + (25 - 0) * ((100vw - 0px ) / (428)));
        } 
        `
        : `
        width: 310px;
        height: 235px;
        ${deviceMedia.media428} {
            width: calc(0px + (310 - 0) * ((100vw - 0px ) / (428)));
            height: calc(0px + (235 - 0) * ((100vw - 0px ) / (428)));
            bottom: calc(0px + (25 - 0) * ((100vw - 0px ) / (428)));
            left: calc(0px + (25 - 0) * ((100vw - 0px ) / (428)));
        }
    `}
`;
