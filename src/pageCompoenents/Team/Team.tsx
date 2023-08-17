import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import AssetsImage from "./assets";
import Link from "next/link";
import { deviceMedia } from "../../common/media";
import { LazyImageWrapper } from 'components/image/LazyImageWrapper';

interface teamType {
    name: string;
    position: string;
    photo: string;
}

const Team = () => {
    const { t } = useTranslation('r2Team');

    const teamListData: teamType[] = [
        { name: t('team.member1.name'), position: t('team.member1.position'), photo: AssetsImage.teamM1 },
        { name: t('team.member3.name'), position: t('team.member3.position'), photo: AssetsImage.teamM7 },
        { name: t('team.member6.name'), position: t('team.member6.position'), photo: AssetsImage.teamM8 },
        { name: t('team.member4.name'), position: t('team.member4.position'), photo: AssetsImage.teamM4 },
        { name: t('team.member5.name'), position: t('team.member5.position'), photo: AssetsImage.teamM3 },
        { name: t('team.member2.name'), position: t('team.member2.position'), photo: AssetsImage.teamM2 },
    ]

    let aosDelayInc = 100;

    return (
        <Section>
            <PageContainer>
                <LinkBox>
                    <StyledLink href="/team" data-aos="fade-up">
                        <span>{t("box.link1.txt")}</span>
                        <LazyImageWrapper>
                            <img width="24" height="24" src={AssetsImage.dorArrRight} alt="arr-right" />
                        </LazyImageWrapper>
                    </StyledLink>

                    <StyledLink href="/team" data-aos="fade-up">
                        <span>{t("box.link2.txt")}</span>
                        <LazyImageWrapper>
                            <img width="24" height="24" src={AssetsImage.dorArrRight} alt="arr-right" />
                        </LazyImageWrapper>
                    </StyledLink>

                    <StyledLink href="/team" data-aos="fade-up">
                        <span>{t("box.link3.txt")}</span>
                        <LazyImageWrapper>
                            <img width="24" height="24" src={AssetsImage.dorArrRight} alt="arr-right" />
                        </LazyImageWrapper>
                    </StyledLink>
                </LinkBox>

                <TeamBox>
                    <TeamList>
                        {
                            teamListData.map((item, index) => {
                                aosDelayInc += 100;

                                return (
                                    <TeamListItem key={index} data-aos="fade-left" data-aos-delay={aosDelayInc}>
                                        <TeamListItemInner>
                                            <LazyImageWrapper>
                                                <img width="360" height="380" src={item.photo} alt={item.name} />
                                            </LazyImageWrapper>

                                            <TeamListItemMemInfo className="TeamListItemMemInfo">
                                                <TeamMemberPosition>{item.position}</TeamMemberPosition>
                                                <TeamMemberName>{item.name}</TeamMemberName>
                                            </TeamListItemMemInfo>
                                        </TeamListItemInner>
                                    </TeamListItem>
                                )
                            })

                        }
                    </TeamList>
                </TeamBox>
            </PageContainer>

        </Section>
    );
}

export default Team;

const Section = styled.section`
    position: relative;
    overflow: hidden;
    
    &::before {
        content: url(${AssetsImage.spiral});
        bottom: 11.7%;
        left: -110px;
        position: absolute;
        
        ${deviceMedia.media640} {
            bottom: auto;
            left: auto;
            right: -110px;
            top: 61px;
        }
    }
`;

const PageContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    display: flex;
    
    ${deviceMedia.media640} {
        flex-direction: column;
    }
`;

const LinkBox = styled.div`
    padding-top: 50px;
    padding-left: 72px;
    border-right: 1px solid ${props => props.theme.black};
    max-width: 255px;
    width: 100%;
    
    ${deviceMedia.media998} {
        padding-left: 50px;
    }
    
    ${deviceMedia.media768} {
        padding-left: 20px;
    }
    
    ${deviceMedia.media640} {
        width: 100%;
        max-width: 100%;
        border-bottom: 1px solid ${props => props.theme.black};
        border-right: none;
        display: flex;
        flex-direction: column;
        padding: 61px 20px 96px;
    }
`;

const TeamBox = styled.div`
    padding: 19px 55px 19px 19px;
    width: 100%;
    
    ${deviceMedia.media1024} {
        padding-right: 20px;
    }
`;

const TeamList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
`

const TeamListItem = styled.div`
    width: calc(100% / 3);
    padding: 8px;
    
    ${deviceMedia.media998} {
        width: calc(100% / 2);
    }
    
    ${deviceMedia.media640} {
       width: 100%;
    }
`;

const TeamListItemInner = styled.div`
    position: relative;
    overflow: hidden;
    padding-bottom: 106.6%;
    filter: grayscale(.4);
    transition: .2s ease-in-out;
    
    img {
        border-radius: 2px;
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: transform .4s ease-in-out;
        will-change: transform;
    }

    
    &:hover {
        filter: grayscale(0);
        
        img {
            transform: scale(1.05);
        }
        
        .TeamListItemMemInfo {
            transform: translateX(0);
        }
    }
`;

const TeamListItemMemInfo = styled.div`
    max-width: 255px;
    width: 85%;
    background-color: ${props => props.theme.white};
    padding: 15px 18px 16px 18px;
    bottom: 34px;
    left: 0;
    transform: translateX(-100%);
    transition: .2s ease-in-out;
    position: absolute;
    
    ${deviceMedia.media640} {
        transform: translateX(0);
    }
`;

const TeamMemberName = styled.p`
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 24px;
    line-height: 28px;
    letter-spacing: .2px;
`;

const TeamMemberPosition = styled.p`
    font-size: 18px;
    line-height: 21px;
    letter-spacing: .2px;
    margin-bottom: 4px;
`;

const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    font-family: ${props => props.theme.PublicSansBold};
    font-size: 16px;
    line-height: 30px;
    letter-spacing: .2px;
    text-transform: uppercase;
    margin-bottom: 32px;
    
    ${deviceMedia.media1440} {
        margin-bottom: calc(15px + (32 - 15) * ((100vw - 1024px) / (${props => props.theme.maxWidth?.replace("px", '')} - 1024)));
    }
    
    ${deviceMedia.media1024} {
        margin-bottom: 15px;
    }
    
    &:last-child {
        margin-bottom: 0;
    }
  
    span,
    img {
        transition: .2s ease-in-out;
    }
    
    span {
        padding: 0 10px;
        padding-top: 2px;
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
    
    img {
        visibility: hidden;      
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
            visibility: visible;
            transform: translateX(5px);
        }
    }
`;
