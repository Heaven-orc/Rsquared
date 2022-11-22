import Link from "next/link";
import styled from 'styled-components';
import {deviceMedia} from "../../../common/media";

interface MenuList {
    data: MenuType[];
}

export interface MenuType {
    title: string;
    path: string;
}

const MenuList: React.FC<MenuList>= ({ data }) => {
    return (
        <Menu>
            {
                data.map((item,index) => (
                    <MenuListItem key={index}>
                        <Link href={item.path}>{item.title}</Link>
                    </MenuListItem>
                ))
            }
        </Menu>
    )
}

export default MenuList;

const Menu = styled.ul`
    display: flex;
    
    ${deviceMedia.media768} {  
        flex-direction: column;
        align-items: center;
    }
`;

const MenuListItem = styled.li`
    margin-right: 32px;
    
    ${deviceMedia.media768} {     
        margin: 0 0 24px;
    }
    
    &:last-child {
        margin-right: 0;
        
        ${deviceMedia.media768} {     
            margin-bottom: 0;
        }
    }
    
    a {
        font-family: ${props => props.theme.PublicSansMedium};
        transition: .1s ease-in-out;
        border-radius: 2px;
        padding: 6px 14px;
        display: inline-block;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
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
        
        &:hover {
            color: ${props => props.theme.lime};
            
            &:before {
                transform: scaleX(1);
            }
        }
    }
`;