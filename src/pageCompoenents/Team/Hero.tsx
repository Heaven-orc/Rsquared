import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import { deviceMedia } from "../../common/media";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    const { t } = useTranslation('r2Team');

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
                <MainTitle data-aos="fade-right">{t("hero.title.text")}</MainTitle>
            </PageContainer>
        </Section>
    );
}

export default Hero;

const Section = styled.section`
    border-bottom: 1px solid ${props => props.theme.black};
    overflow: hidden;
`;

const PageContainer = styled.div`
      width: min(100%, ${props => props.theme.maxWidth});
      margin: 0 auto;
      padding: 97px 60px 68px;
      position: relative;
      
      ${deviceMedia.media768} {
        padding: 97px 20px 68px;
      }
      
      ${deviceMedia.media640} {
        padding: 60px 20px 24px;
      }
      
      &:after {
          content: url(${AssetsImage.arrScrollD});
          position: absolute;
          right: 55px;
          bottom: 28px;
          
          ${deviceMedia.media1024} {
            right: 20px;
          }
          
          ${deviceMedia.media640} {
            bottom: 35px;
          }
      }
`;

const MainTitle = styled.h1`
    font-family: ${props => props.theme.AnteCFBlack};
    font-size: 100px;
    line-height: 97px;
    text-transform: capitalize;
    position: relative;
    display: inline-block;
    z-index: 1;
    
    ${deviceMedia.media1440} {
        font-size: calc(69px + (100 - 69) * ((100vw - 768px) / (${props => props.theme.maxWidth?.replace("px", '')} - 768)));
    }
    
    ${deviceMedia.media640} {
        font-size: 69px;
        max-width: 321px;
    }
    
    ${deviceMedia.media428} {
        font-size: calc(55px + (69 - 55) * ((100vw - 320px) / (428 - 320)));
    }

    &:after {
        content: url(${AssetsImage.titleStar});
        position: absolute;
        z-index: -1;
        right: -75px;
        top: 50%;
        transform: translateY(-50%);
        
        ${deviceMedia.media640} {
            right: auto;
            left: 85px;
        }
    }
`;

