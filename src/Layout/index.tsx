import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import styled from 'styled-components';
import { deviceMedia } from "common/media";

interface options {
    children?: ReactNode
}

const Layout: React.FC<options> = ({ children }) => {
    return (
        <>
            <Header />
            <PageWrap>{children}</PageWrap>
            <Footer />
        </>
    )
}

export const runtime = 'edge';

export default Layout;

const PageWrap = styled.main`
   ${deviceMedia.media1024} {
       padding-top: 96px;
   }
`;