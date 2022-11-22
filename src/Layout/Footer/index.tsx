import MenuList, { MenuType } from "../Footer/components/MenuList";
import styled from 'styled-components';
import { useTranslation } from "next-i18next";
import Link from "next/link";
import AssetsImage from "../assets";
import {deviceMedia} from "../../common/media";

interface PolicyTerms {
    label: string;
    link: string;
    target: boolean;
}

interface Social {
    icon: string;
    label: string;
    link: string;
    target: boolean;
}

const Footer = () => {
    const { t } = useTranslation("common");
    const year = new Date().getFullYear();

    const menuItemsData: MenuType[] = [
        { title: t('footer.nav.portfolio'), path: '/portfolio' },
        { title: t('footer.nav.team'), path: '/team' },
        { title: t('footer.nav.news'), path: '/news' },
        { title: t('footer.nav.contact'), path: '/contact' }
    ];

    const policyTermsData: PolicyTerms[] = [
        { label: t('footer.policy.group.title1'), link: '/', target: false },
        { label: t('footer.policy.group.title2'),  link: '/', target: false }
    ]

    const socialData: Social[] = [
        { icon: AssetsImage.instagram, link: '/', target: false, label: 'instagram' },
        { icon: AssetsImage.linkedin, link: '/', target: false, label: 'linkedin' }
    ]

    return (
        <PageFooter>
            <PageContainer>
                <FooterInnerTop>
                    <MenuList data={menuItemsData} />

                    <SocialsGroup>
                        {
                            socialData.map((item, index) => (
                                <SocialItem key={index}>
                                    <StyledLinkSocial href={item.link} target={item.target ? "_blank" : undefined}>
                                        <img width="20" height="20" src={item.icon} alt={item.label} />
                                    </StyledLinkSocial>
                                </SocialItem>
                            ))
                        }
                    </SocialsGroup>
                </FooterInnerTop>

                <FooterInnerBottom>
                    <Copyright>© {year} {t('footer.rights.text')}</Copyright>

                    <PolicyGroup>
                        {
                            policyTermsData.map((item, index) => (
                                <PolicyTermsItem key={index}>
                                    <StyledLinkPrivacyTerm href={item.link} target={item.target ? "_blank" : undefined}>
                                        {item.label}
                                    </StyledLinkPrivacyTerm>
                                </PolicyTermsItem>
                            ))
                        }
                    </PolicyGroup>
                </FooterInnerBottom>
            </PageContainer>
        </PageFooter>
    )
}

export default Footer;

const PageFooter = styled.footer`
    padding: 62px 0 26px;
    border-top: 1px solid ${props => props.theme.black};
    
    ${deviceMedia.media768} {
        padding: 40px 0;
    }
`;

const PageContainer = styled.div`
    padding: 0 56px 0;
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    
    ${deviceMedia.media768} {
        padding: 0;
    }
`;

const FooterInnerTop = styled.div`
    padding-top: 55px;
    padding-bottom: 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${props => props.theme.black};
    
    ${deviceMedia.media768} {
        padding: 24px 0 0;
        flex-direction: column;
    }
`;

const SocialsGroup = styled.ul`
    display: flex;
    
    ${deviceMedia.media768} {     
        margin-top: 36px;
        margin-bottom: 36px;
    }
    
`;

const SocialItem = styled.li`
    margin-right: 30px;
    
    &:last-child {
        margin-right: 0;
    }
`;

const StyledLinkSocial = styled(Link)`
    display: block;
    width: 20px;
    height: 20px;
`;

const FooterInnerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    
    ${deviceMedia.media768} {
        flex-direction: column;
        align-items: center;
    }
`;

const Copyright = styled.div`
    font-family: ${props => props.theme.PublicSansSemiBold};
    font-size: 12px;
    line-height: 130%;
    
    ${deviceMedia.media768} {
        order: 1;
        margin-top: 24px;
    }
`;

const PolicyGroup = styled.ul`
    display: flex;
    margin: 0 -13px;
`;

const PolicyTermsItem = styled.li`
    position: relative;
    padding: 0 13px;
    
    &:after {
        content: '';
        width: 1px;
        height: 26px;
        background-color: ${props => props.theme.black};
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
    }
    
    &:last-child {
        &:after {
            content: none;
        }
    }
`;

const StyledLinkPrivacyTerm = styled(Link)`
    font-family: ${props => props.theme.PublicSansSemiBold};
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
`;