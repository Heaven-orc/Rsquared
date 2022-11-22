import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import React from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import TextAnimate from './TextAnimate';
import { deviceMedia } from 'common/media';
import { IValuesItem } from 'pageCompoenents/Home/types';
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const Right = ({ values }: { values: IValuesItem[] }) => {
    const { t } = useTranslation('r2Home');
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const rightBoxs = document.querySelectorAll(".right-box")
        rightBoxs?.forEach((elem, ind) => {
            const tl = gsap.timeline()
            ScrollTrigger.create({
                trigger: elem,
                animation: tl,
                scrub: true,
                // markers: { startColor: "blue", endColor: "blue" },
                start: "bottom-=55% top+=25%",
                end: "bottom-=30% top+=25%",
            });
            tl.fromTo(elem.querySelector(".right-box-content"), {
                opacity: 1,
                duration: 4
            }, {
                opacity: 0,
                duration: 4
            })
        })
    }, [])
    return (
        <Box>
            {values.map((elem, idx) =>
                <Block key={elem.id} className="right-box">
                    <Content className="right-box-content">
                        <TextAnimate >
                            <TitleWrapper>
                                <LazyImageWrapper>
                                    <Icon src={elem.icon} alt={`icon for ${elem.title}`} />
                                </LazyImageWrapper>
                                <Title dangerouslySetInnerHTML={{ __html: elem.title }} />
                            </TitleWrapper>
                        </TextAnimate>
                        <TextAnimate>
                            <Description dangerouslySetInnerHTML={{ __html: elem.description }} />
                        </TextAnimate>
                    </Content>
                </Block>
            )}
        </Box>
    );
}

export default Right;


const Box = styled.div`
    flex: 1 1 40%;
    ${deviceMedia.media428} {
        flex: 1 1 30%;
    }
`;
const Block = styled.div`
    height: 515px;
    // background: #2f7f128c;

    ${deviceMedia.media1440} {
        height: 280px;
        height: calc(280px + (515 - 280) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;
const Icon = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 27px;
    background: rgba(111, 201, 255, 0.7);
    border-radius: 30px;
    ${deviceMedia.media1440} {
        width: 20px;
        height: 20px;
        margin-right: 17px;
        width:  calc(20px + (60 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        height: calc(20px + (60 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        margin-right:  calc(17px + (27 - 17) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));

    }
    ${deviceMedia.media428} {
        width: 20px;
        height: 20px;
        margin-right: 17px;
        width: calc(0px + (20 - 0) * ((100vw - 0px ) / (428)));
        height: calc(0px + (20 - 0) * ((100vw - 0px ) / (428)));
        margin-right: calc(0px + (17 - 0) * ((100vw - 0px ) / (428)));

    }
`;
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 19px;
    ${deviceMedia.media1440} {
        padding-bottom: calc(2px + (19 - 2) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;
const Title = styled.h3`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 64px;
    text-transform: capitalize;
    color: #030303;
    line-height: 100%;
    ${deviceMedia.media1440} {
        font-size: 30px;
        font-size: calc(30px + (64 - 30) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    ${deviceMedia.media428} {
        font-size: 20px;
        font-size: calc(0px + (30 - 0) * ((100vw - 0px ) / (428)));
    }
`;
const Description = styled.div`
    font-family: ${props => props.theme.PublicSansRegular};
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.black};
    ${deviceMedia.media1440} {
        font-size:  13px;
        line-height:  20px;
        font-size:  calc(13px + (20 - 13) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        line-height:  calc(20px + (32 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;
const Content = styled.div`
    margin-top:106px;
    max-width:532px;
    width: 100%;
    ${deviceMedia.media1440} {
        margin-top: 40px;
        margin-top: calc(40px + (106 - 40) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;