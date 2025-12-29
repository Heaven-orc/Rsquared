import React from "react"
import styled from "styled-components";

type LazyImageWrapperProps = React.ComponentPropsWithoutRef<"div">

export const LazyImageWrapper: React.FC<LazyImageWrapperProps> = ({ children, ...arg }) => {

    const imageWrapperRef = React.useRef<HTMLDivElement>(null)
    const [inViewport, setInViewport] = React.useState(false)

    React.useEffect(() => {
        if ("IntersectionObserver" in window && imageWrapperRef.current) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                if (entries?.[0].isIntersecting && !inViewport) {
                    setInViewport(true)
                }
            });
            imageObserver.observe(imageWrapperRef.current);
        } else {
            if (!imageWrapperRef.current) {
                setInViewport(true)
                return
            }
            let lazyloadThrottleTimeout: NodeJS.Timeout | undefined

            const lazyload = () => {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function () {
                    let scrollTop = window.pageYOffset;
                    if (imageWrapperRef.current && imageWrapperRef.current.offsetTop < (window.innerHeight + scrollTop)) {
                        setInViewport(true)
                    } else {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);

            return () => {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }
    }, [])
    return (
        <Wrapper {...arg} ref={imageWrapperRef}>
            {!inViewport
                ? <> </> // place skeleton here
                : children
            }
        </Wrapper>
    )
}
const Wrapper = styled.div<React.ComponentPropsWithRef<"div">>`
    display: flex;
    align-items: center;
`;
