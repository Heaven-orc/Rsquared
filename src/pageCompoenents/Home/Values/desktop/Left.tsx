import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import React from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { deviceMedia } from 'common/media';
import { IValuesItem } from 'pageCompoenents/Home/types';
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const Left = ({ values }: { values: IValuesItem[] }) => {
    const { t } = useTranslation('r2Home');

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const leftBoxs = document.querySelectorAll(".left-box")

        leftBoxs?.forEach((elem, ind) => {
            const tl = gsap.timeline()
            ScrollTrigger.create({
                trigger: elem,
                animation: tl,
                scrub: true,
                // markers: { startColor: "blue", endColor: "blue" },
                start: "bottom-=60% top+=25%",
                end: "bottom-=4% top+=25%",
            });
            if (leftBoxs.length - 1 !== ind) {
                tl.fromTo(elem.querySelector(".left-box-image"), {
                    opacity: 1,
                    scale: 1,
                    duration: 4
                }, {
                    opacity: 0,
                    scale: .4,
                    duration: 4
                })
            } else {
                gsap.to(elem.querySelector(".left-wrapper-box-image"), {
                    duration: 4,
                    position: "static"
                })
            }
            gsap.to(elem, {
                position: "sticky", top: "10%",
                duration: 0.1
            })
        })
    }, [])

    return (
        <Box>
            {values.map((elem, idx) =>
                <Block key={elem.id} className="left-box">
                    <ImageBlockWrapper className="left-wrapper-box-image">
                        <Image even={!(idx % 2)} className="left-box-image" src={elem.img} alt={`image for ${elem.title}`} />
                    </ImageBlockWrapper>
                </Block>
            )}
        </Box>
    );
}

export default Left;

const Box = styled.div`
    flex: 1 1 35%;
`;
const Block = styled.div`
    height: 621px;
    // background: #462c848c;
    position: sticky;
    top: 10%;
    ${deviceMedia.media1440} {
        height: 320px;
        height: calc(320px + (621 - 320) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    }
`;
const ImageBlockWrapper = styled.div`
    position: sticky;
    top: 26%;
`;
interface IImage {
    even: boolean
}
const Image = styled.img<IImage>`
    object-fit: cover;
    position: relative;
    z-index: 1;
    border-radius: 20px;
    background: ${props => props.theme.black};
    left: 40px;
    ${deviceMedia.media1440} {
        border-radius: 5px;
        border-radius: calc(5px + (20 - 5) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)));
    } 
    ${props => props.even
        ? `  
        top: 40px;
        width: 472px;
        height: 354px;
        ${deviceMedia.media1440} {
            width: 160px;
            height: 120px;
            top: 13.56px;
            left: 27.56px;
            width: calc(160px + (472 - 160) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
            height: calc(120px + (354 - 120) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
            top: calc(13.56px + (40 - 13.56) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
            left: calc(27.56px + (40 - 27.56) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
        }
        `
        : `
        top: -40px;
        width: 397px;
        height: 446px;
        ${deviceMedia.media1440} {
            width: 160px;
            height: 120px;
            top: -13.56px;
            left: 27.56px;
            width: calc(160px + (397 - 160) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
            height: calc(120px + (446 - 120) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
            top: calc(-13.56px + (-40 + 13.56) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
            left: calc(27.56px + (40 - 27.56) * ((100vw - 428px) / (${props.theme.maxWidth?.replace("px", '')} - 428)));
        } 
        
    `}
`;