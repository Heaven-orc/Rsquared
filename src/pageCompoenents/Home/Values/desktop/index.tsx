import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import Left from './Left';
import Right from './Right';
import React from 'react';
import { deviceMedia } from 'common/media';
import StaticBackground from './StaticBackground';
import { IDesktopValues } from 'pageCompoenents/Home/types';

const DesktopValues = ({ values }: IDesktopValues) => {
    const { t } = useTranslation('r2Home');

    return (
        <>
            <Section>
                <StaticBackground />
                <InnerContainer>
                    <ContentBox>
                        <ItemsWrapper>
                            <Left values={values} />
                            <Right values={values} />
                        </ItemsWrapper>
                    </ContentBox>
                </InnerContainer>
            </Section>

        </>
    );
}

export default DesktopValues;

const Section = styled.section`
    position: relative;
    height: 100%;
`;

const ItemsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;
const InnerContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    padding: 0 55px;   
    ${deviceMedia.media1440} {
        padding: 0 6px;
        padding: 0
        calc(6px + (55 - 6) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    position: relative;
    height: 100%;
    &:before {
        content: '';
        width: 1px;
        height:100%;
        background-color: black;
        position: absolute;
        right: 166px;
        top: 0;
    }
    ${deviceMedia.media1440} {
        &:before {
            display: none;
        }
    }
   
`;
const ContentBox = styled.div`
    width: 100%;
    height: 100%;
    
    padding-top: 135px;
    ${deviceMedia.media1440} {
        padding-top: 58px;
        padding-top:
        calc(58px + (135 - 58) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;
