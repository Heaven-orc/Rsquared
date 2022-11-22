import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import React from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ITextAnimate } from 'pageCompoenents/Home/types';



const TextAnimate = ({ children }: ITextAnimate) => {
    const { t } = useTranslation('r2Home');

    const textRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            paused: true
        })

        tl.fromTo(textRef.current, {
            y: 100,
            opacity: 0,
            duration: .1
        }, {
            y: 0,
            opacity: 1,
            duration: .5

        })
        ScrollTrigger.create({
            trigger: textRef.current,
            start: "bottom bottom+=100px",
            // markers: { startColor: "blue", endColor: "blue" },
            toggleActions: "restart none restart none",
            onUpdate: self => {
                self.isActive
                    ? tl.play()
                    : tl.reversed(true)
            },
        });
    }, [])
    return (
        <TextWrapper ref={textRef}>
            {children}
        </TextWrapper>
    );
}

export default TextAnimate;

const TextWrapper = styled.div`
    font-size: 24px;
    opacity: 0;
`;