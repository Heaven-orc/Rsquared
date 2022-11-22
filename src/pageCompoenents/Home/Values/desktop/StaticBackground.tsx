import styled from 'styled-components';
import AssetsImage from "../../assets";
import React from 'react';
import { deviceMedia } from 'common/media';

const StaticBackground = () => {
    return (
        <>
            <Background>
                <BackgroundBlock>
                    <InnerContainerBG >
                            <Bg />
                    </InnerContainerBG>
                </BackgroundBlock>
            </Background>
        </>
    );
}

export default StaticBackground; 

const InnerContainerBG = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    position: relative;
    height: 100%;
    &:before {
        content: '';
        width: 220px;
        height: 206px;
        content: url(${AssetsImage.spiral});
        position: absolute;
        right: 54px;
        bottom: 67px;
    }
    ${deviceMedia.media1440} {
        &:before {
            display: none;
        }
    }
`;
const Bg = styled.div`
    width: 423px;
    height: 432px;
    background: ${props => props.theme.magenta};
    border-radius: 30px;
    margin-left: 55px;
    position: relative;
    ${deviceMedia.media1440} {
        width: 170px;
        height: 146.45px;
        margin-left: 20px;
        margin-left: calc(20px + (55 - 20) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        width: calc(170px + (423 - 170) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        height: calc(146.45px + (432 - 146.45) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: -88px;
        left: -42px;
        background-repeat: no-repeat;
        background-position: 0% 100%;
        background-size: 89% 100%;
        z-index: 2;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='631' height='178' viewBox='0 0 631 178' fill='none'%3E%3Cpath d='M14 31.473C14.1127 93.5071 476.365 -58.0226 185.977 61.4188C-177.008 210.721 723.852 -71.5336 381.67 80.1004C39.4884 231.735 512.644 135.931 617.317 117.515' stroke='%236FC9FF' stroke-width='27' stroke-linecap='round'/%3E%3C/svg%3E");
        width: 600px;
        height: 150px;
        ${deviceMedia.media1440} {
            width: 242px;
            width: calc(242px + (600 - 242) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        }
    }
`;
const Background = styled.div`
    border-bottom: 1px solid ${props => props.theme.black};
    position: absolute;
    padding-top: 135px;
    ${deviceMedia.media1440} {
        padding-top: 58px;
        padding-top: calc(58px + (135 - 58) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
    height: 100%;
    width: 100%;
`;
const BackgroundBlock = styled.div`
    height: 621px;
    position: sticky;
    overflow: hidden;
    top: 26%;
    &:after {
        content: '';
        display: block;
        width: 250%;
        position: absolute;
        height: 1px;
        bottom: 170px;
        background-color:${props => props.theme.black};
        right: -100%;
    }
    ${deviceMedia.media1440} {
        height: 320px;
        height: calc(320px + (621 - 320) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
        &:after {
            display: none;
        }
    }
`;