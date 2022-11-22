import { LazyImageWrapper } from "components/image/LazyImageWrapper";
import Link from "next/link";
import styled from "styled-components";

export interface Logo {
    icon: string;
}

const Logo: React.FC<Logo> = ({ icon }) => {
    return (
        <LogoContainer href="/">
            <LazyImageWrapper>
                <img width="56" height="45" src={icon} alt="r2-logo" />
            </LazyImageWrapper>
        </LogoContainer>
    )
};

export default Logo;

const LogoContainer = styled(Link)`
    display: inline-block;
    cursor: pointer;
    max-height: 45px;
    max-width: 55px;
    width: 100%;
`;