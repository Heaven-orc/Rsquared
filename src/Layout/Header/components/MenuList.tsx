import Link from "next/link";
import styled from 'styled-components';
import {deviceMedia} from "../../../common/media";
import { useRouter } from "next/router";

interface MenuList {
    data: MenuType[];
}

export interface MenuType {
    title: string;
    path: string;
}

const MenuList: React.FC<MenuList>= ({ data }) => {
    const router = useRouter();

    return (
        <Menu>
            <MenuListItem className={router.pathname == "/" ? "active menu-home-item" : " menu-home-item"}>
                <Link href='/'>Home</Link>
            </MenuListItem>
            {
                data.map((item,index) => (
                    <MenuListItem key={index} className={router.pathname == item.path ? "active" : ""}>
                        <Link href={item.path}>{item.title}</Link>
                    </MenuListItem>
                ))
            }
        </Menu>
    )
}

export default MenuList;

const Menu = styled.ul`
    margin-left: 90px;
    display: flex;
    
    .menu-home-item {
        display: none;
    }
    
    ${deviceMedia.media1024} {
        width: 100%;
        flex-direction: column;
        margin: 0;
        
        .menu-home-item {
            display: block;
        }
    }
`;

const MenuListItem = styled.li`
    margin-right: 32px;
    
    ${deviceMedia.media1024} {
        margin: 0;
        border-bottom: 1px solid ${props => props.theme.black};
        
        &.active {
            background-color: ${props => props.theme.black};
            color: ${props => props.theme.lime};
        }
    }
    
    &:last-child {
        margin-right: 0;
    }
    
    a {
        font-family: ${props => props.theme.PublicSansMedium};
        transition: .2s ease-in-out;
        border-radius: 2px;
        padding: 6px 14px;
        display: inline-block;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        position: relative;
        z-index: 0;
        
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
        
        ${deviceMedia.media1024} {
            padding: 37px 14px;
            display: block;
            text-align: center;
        }
        
        ${deviceMedia.media640} {
            text-align: left;
        }
        
        &:hover {
            color: ${props => props.theme.lime};
            
            &:before {
                transform: scaleX(1);
            }
        }
    }
`;