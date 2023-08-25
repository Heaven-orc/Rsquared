import React from "react"
import styled from 'styled-components';

import { deviceMedia } from "common/media";
import { PATH_NEWS_PAGE } from "config/path";
import Article from "./Article";
import BigArticle from "./BigArticle";
import { IReadMoreArticles } from "./types";



const GeneralArticles: React.FC<IReadMoreArticles> = ({ data }) => {
    console.log(data)

    return (
        <>
            <Section>
                <Box>
                    <InnerContainer>
                        <GridArticles data-aos="fade-up">
                            {data.map((elem, idx) => (
                                <GridArticleWrapper big={idx === 0} key={elem.id}>
                                    {idx === 0
                                        ? <BigArticle
                                            key={elem.id}
                                            img={elem.img}
                                            title={elem.title}
                                            date={elem.date}
                                            description={elem.description}
                                            path={`${PATH_NEWS_PAGE}/${elem.slug}`}
                                        />
                                        : <Article
                                            key={elem.id}
                                            img={elem.img}
                                            title={elem.title}
                                            path={`${PATH_NEWS_PAGE}/${elem.slug}`}
                                        />}

                                </GridArticleWrapper>

                            ))}
                        </GridArticles>
                    </InnerContainer>
                </Box>
            </Section>
        </>
    )
}
export default GeneralArticles

const Section = styled.section`
     overflow: hidden;
`;
const Box = styled.div`
     overflow: hidden;
    border-bottom: 1px solid ${props => props.theme.black};
`;
const InnerContainer = styled.div`
     width: min(100%, ${props => props.theme.maxWidth});
     margin: 0 auto;
     padding: 30px 41px;
     ${deviceMedia.media1440} {
        padding: 14px 6px;
        padding: 
        calc(14px + (30 - 14) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        calc(6px + (41 - 6) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
`;
const GridArticles = styled.div`
    height: 100%;
    display: grid;
    padding: 18px 0px 30px;
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${deviceMedia.media1280} {
        grid-template-columns: 1fr 1fr;
    }
    ${deviceMedia.media500} {
        grid-template-columns:  1fr;
    }
`;
interface IGridArticleWrapper {
    big?: boolean
}
const GridArticleWrapper = styled.div<IGridArticleWrapper>`
    height: 100%;   
    grid-column: ${props => props.big ? "span 2 / span 2" : ""};
    grid-row: ${props => props.big ? "span 2 / span 2" : ""};
    ${deviceMedia.media1280} {
        grid-column: ${props => props.big ? "span 2 / span 2" : "span 1 / span 1"};
        grid-row: ${props => props.big ? "span 2 / span 2" : ""};
    }
    ${deviceMedia.media500} {
        grid-column:  span 1 / span 1;
        grid-row: span 1 / span 1;
    }
`;