import AssetsImage from '../assets';
import styled from 'styled-components';
import Logo from "components/Logo";
import { useTranslation } from "next-i18next";
import MenuList, { MenuType } from "./components/MenuList";
import Link from "next/link";
import { useState, useEffect } from "react";
import { deviceMedia } from "../../common/media";
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

const Header = () => {
    const { t } = useTranslation("common");
    const [showMobMenu, setShowMobMenu] = useState(false);
    const [domLoaded, setDomLoaded] = useState(false);
    const { pathname } = useRouter();
    const isTable = useMediaQuery({ query: '(max-width: 1024px)' });

    const menuItemsData: MenuType[] = [
        { title: t('header.nav.portfolio'), path: '/portfolio' },
        { title: t('header.nav.team'), path: '/team' },
        { title: t('header.nav.news'), path: '/news' },
        { title: t('header.nav.contact'), path: '/contact' }
    ];

    const setMobile = (mobState: boolean) => {
        setShowMobMenu(mobState);
        const burgerBtn = document.querySelector('.burger') as HTMLButtonElement;
        document.body.classList.toggle('mobile-open');
        burgerBtn.classList.toggle('open');
    }

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    useEffect(() => {
        setShowMobMenu(false);
        const burgerBtn = document.querySelector('.burger') as HTMLButtonElement;
        document.body.classList.remove('mobile-open');
        burgerBtn.classList.remove('open');
    }, [pathname]);

    return (
        <PageHeader>
            <HeaderContainer>
                <Logo icon={AssetsImage.mainLogo} />

                {domLoaded && (
                    isTable ?
                        showMobMenu ?
                            <MenuListWrap>
                                <MenuList data={menuItemsData} />
                            </MenuListWrap>
                            : ''
                        :
                        <>
                            <MenuListWrap>
                                <MenuList data={menuItemsData} />
                            </MenuListWrap>

                            <LinkWrap>
                                <StyledLink href='https://0rjzg131cmn.typeform.com/to/Tghyn9CD' target="_blank">
                                    <span>{t('header.submit.btn')}</span>
                                    <LazyImageWrapper>
                                        <img width="24" height="24" src={AssetsImage.dotArrRight} alt="arr-right" />
                                    </LazyImageWrapper>
                                </StyledLink>
                            </LinkWrap>
                        </>
                )
                }

                <Burger onClick={() => setMobile(!showMobMenu)} className="burger">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </Burger>
            </HeaderContainer>
        </PageHeader>
    )
}

export default Header;

const PageHeader = styled.header`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.black};
    
    ${deviceMedia.media1024} {
        position: fixed;
        width: 100%;
        background: #f8f9fd;
        z-index: 10;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: min(100%, ${props => props.theme.maxWidth});
    padding: 25px 56px;
    
    ${deviceMedia.media1024} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const MenuListWrap = styled.div`
    ${deviceMedia.media1024} {
        position: fixed;
        top: 96px;
        width: 100%;
        left: 0;
        background: #f8f9fd;
        bottom: 0;
        display: flex;
        justify-content: center;
        overflow: scroll auto;
    }
`;

const LinkWrap = styled.div`
    margin-left: auto;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 16px;
    line-height: 30px;
    letter-spacing: .2px;
    text-transform: uppercase;
  
    span,
    img {
        transition: .2s ease-in-out;
    }
    
    span {
        border-left: 1px solid ${props => props.theme.black};
        padding: 0 10px;
        z-index: 0;
        position: relative;
        
        &:before {
            content: '';
            position: absolute;
            z-index:-1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${props => props.theme.black};
            transform: scaleX(0);
            transform-origin: 0 50%;
            transition: transform .2s ease-in-out;
        }
    }
    
    &:hover {
        span {
            color: ${props => props.theme.lime};
            border-radius: 2px;
            display: flex;
            
            &:before {
                transform: scaleX(1);
            }
        }
        
        img {
            transform: translateX(5px);
        }
    }
`;

const Burger = styled.button`
        width: 27px;
        height: 18px;
        cursor: pointer;
        position: relative;
        margin-left: auto;
        transition: .5s ease-in-out;
        outline: none;
        border: none;
        background: transparent;
        display: none;
        
        ${deviceMedia.media1024} {
            display: block;
        }
        
        &.open {
            .burger-line {
                &:nth-child(1) {
                    top: 7px;
                    width: 0;
                    left: 50%;
                }
    
                &:nth-child(2) {
                    transform: rotate(45deg);
                }
    
                &:nth-child(3) {
                    transform: rotate(-45deg);
                }
    
                &:nth-child(4) {
                    top: 7px;
                    width: 0;
                    left: 50%;
                }
            }
        }

        .burger-line {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: ${props => props.theme.black};
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            border-radius: 5px;
            transition: .1s ease-in-out;

            &:nth-child(1) {
                top: 0;
            }

            &:nth-child(2),
            &:nth-child(3) {
                top: 8px;
            }

            &:nth-child(4) {
                top: 16px;
            }
        }
`;