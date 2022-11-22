import React from "react"
import styled from 'styled-components';
import { useTranslation } from "next-i18next";

import { deviceMedia } from "common/media";
import { PATH_NEWS_PAGE } from "config/path";
import Article from "./Article";
import AssetsImage from "./assets";
import { IReadMoreArticles } from "./types";
import { LazyImageWrapper } from "components/image/LazyImageWrapper";


const ReadMoreArticles: React.FC<IReadMoreArticles> = ({ data }) => {

  const { t } = useTranslation('r2News');

  let aosDelay = 100;

  return (
    <>
      {data && data.length > 0 &&
        <Section>
          <Box>
            <InnerContainer>
              <TextReadMore data-aos="fade-right">
                <h5>{t("readMore.title.text1")}</h5>
                <LazyImageWrapper>
                  <img src={AssetsImage.starIcon} alt="star" />
                </LazyImageWrapper>
              </TextReadMore>
            </InnerContainer>
          </Box>
          <InnerContainerForGrid>
            <GridArticles>
              {
                data.map((elem) => {
                  aosDelay += 100;

                  return (
                    <Article
                      key={elem.id}
                      img={elem.img}
                      title={elem.title}
                      path={`${PATH_NEWS_PAGE}/${elem.slug}`}
                      data-aos-delay={aosDelay}
                      data-aos="fade-up"
                    />
                  )

                })
              }
            </GridArticles>
          </InnerContainerForGrid>
        </Section>
      }
    </>
  )
}
export default ReadMoreArticles

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
  ${deviceMedia.media1440} {
    padding: 24px 20px;
    padding: 
    calc(24px + (40 - 24) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
    calc(20px + (55 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
}
`;
const InnerContainerForGrid = styled.div`
  width: min(100%, ${props => props.theme.maxWidth});
  margin: 0 auto;
  padding: 40px 41px;
  ${deviceMedia.media1440} {
      padding: 14px 6px;
      padding: 
      calc(14px + (40 - 14) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
      calc(6px + (41 - 6) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
  } 
`;
const GridArticles = styled.div`
  display: grid;
  padding:  16px 0px 44px;
  grid-template-columns:  1fr 1fr 1fr;
  ${deviceMedia.media1024}  {
    grid-template-columns: 1fr 1fr;
  }
  ${deviceMedia.media500}{
    grid-template-columns:  1fr;
  }
`;
const TextReadMore = styled.div`
  display: flex;
  align-items: center;
  h5 {
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;
    color: ${props => props.theme.black};
    margin-right: 27px;
    ${deviceMedia.media428} {
      font-size: 14px;
      font-size: calc(14px + (32 - 14) * ((100vw - 0px ) / (428)));
    }
  }
`;