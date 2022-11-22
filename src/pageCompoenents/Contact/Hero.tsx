import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { deviceMedia } from 'common/media';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    const { t } = useTranslation('r2Contact');

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
            <Box>
                <InnerContainer>
                    <Title data-aos="fade-right">{t("hero.title.text1")}</Title>
                    <Description data-aos="fade-left">{t("hero.title.text2")}</Description>
                </InnerContainer>
            </Box>
        </Section>
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
    padding: 49px 55px 21px;
    ${deviceMedia.media1440} {
        padding: 49px 20px 21px;
        padding: 49px
        calc(20px + (55 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        21px;
    }
`;
const Title = styled.h1`
    font-family: ${props => props.theme.AnteCFBlack};
    text-transform: capitalize;
    color: ${props => props.theme.black};
    font-size: 100px;
    padding-bottom: 47px;
    width: 100%;
    width: max-content;
    background-repeat: no-repeat;
    background-position: 40% 60%;
    background-size: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='699' height='64' viewBox='0 0 699 64' fill='none'%3E%3Cpath d='M17 32C47.5515 53.3333 78.103 53.3333 108.654 32C139.206 10.6667 169.757 10.6667 200.309 32C230.86 53.3333 261.412 53.3333 291.963 32C322.515 10.6667 353.066 10.6667 383.618 32C414.169 53.3333 444.721 53.3333 475.272 32C505.824 10.6667 536.375 10.6667 566.927 32C597.478 53.3333 651.448 41.6467 682 20.3133' stroke='%236FC9FF' stroke-width='32' stroke-linecap='round'/%3E%3C/svg%3E");
    ${deviceMedia.media1440} {
        font-size: 51px;
        font-size: calc(51px + (100 - 51) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        padding-bottom: 24px;
        padding-bottom: calc(24px + (47 - 24) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    ${deviceMedia.media428} {
        font-size: 20px;
        font-size: calc(0px + (51 - 0) * ((100vw - 0px ) / (428)));
        padding-bottom: 24px;
        padding-bottom: calc(0px + (24 - 0) *  ((100vw - 0px ) / (428)));
    }
`;
const Description = styled.div`
    font-family: ${props => props.theme.PublicSansSemiBold};
    font-size: 20px;
    line-height: 24px;
    text-align: justify;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: ${props => props.theme.black};
    max-width: 750px;
    margin: 0 0 0 auto;
    ${deviceMedia.media428} {
        font-size:10px;
        font-size: calc(10px + (20 - 10) * ((100vw - 0px ) / (428)));
    }
`;