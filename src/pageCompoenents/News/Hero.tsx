import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import { deviceMedia } from 'common/media';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    const { t } = useTranslation('r2News');

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
        <>
            <Section>
                <Box>
                    <InnerContainer>
                        <Title data-aos="fade-up">{t("hero.title.text1")}</Title>
                    </InnerContainer>
                </Box>
            </Section>
        </>
    );
}

export default Hero;

const Section = styled.section`
    overflow: hidden;
`;
const Box = styled.div`
    border-bottom: 1px solid ${props => props.theme.black};
`;
const InnerContainer = styled.div`
     width: min(100%, ${props => props.theme.maxWidth});
     margin: 0 auto;
     padding: 40px 55px;
     display: flex;
     align-items: flex-end;
     flex-direction: row-reverse;
     &:after {
        position: absolute;
        content: url(${AssetsImage.circleArrDown});
        height: 40px;
        width: 40px;
    }
    ${deviceMedia.media1024} {
        &:after {
            transform: translateY(30px);
        }
        padding: 40px 20px; 
        padding:  40px
            calc(20px + (55 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
     }
`;
const Title = styled.h1`
    font-family: ${props => props.theme.AnteCFBlack};
    text-transform: capitalize;
    color:  ${props => props.theme.black};
    font-size: 100px;
    width: 100%;
    padding: 20px 120px 47px;
    margin: 0 auto;
    width: max-content;
    background-repeat: no-repeat;
    background-position: 0% 80%;
    background-size: 70%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='341' height='117' viewBox='0 0 341 117' fill='none'%3E%3Cpath d='M12 22.8124C12.059 61.1996 254.173 -32.5681 102.077 41.3431C-88.0445 133.732 383.8 -40.9288 204.575 52.9034C25.3501 146.736 273.175 87.4519 328 76.0556' stroke='%236FC9FF' stroke-width='24' stroke-linecap='round'/%3E%3C/svg%3E");
    ${deviceMedia.media1440} {
        font-size: 69px;
        font-size: calc(69px + (100 - 69) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        padding: 0px 40px;
        padding: 
            calc(0px + (20 - 0) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
            calc(40px + (120 - 40) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
            calc(0px + (47 - 0) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
  
    }
    ${deviceMedia.media428} {
        font-size: 20px;
        font-size: calc(0px + (69 - 0) * ((100vw - 0px ) / (428)));
    }
`;