import * as React from 'react';
import {
    MenuContainer,
} from '../../styled/components/gui';
import MenuItem from './MenuItem';
import SubMenu from "./SubMenu";
import { MENU_OPTIONS } from './MenuOptions';

export interface IProps {
    handleSelectMenuItem: (id: number) => void;
    // options: IOptions[];
    selectedMenuItem: any; // TODO WBD Fix this. Should be number | null;
}

const Menu = (props: IProps) => {
    const handleSelectMenuItem = (id: number) => {
        props.handleSelectMenuItem(id);
    };

    return (
        <MenuContainer>
            {
                MENU_OPTIONS.map((menuItem, index) => (
                    <MenuItem
                        handleSelectMenuItem={handleSelectMenuItem}
                        id={index}
                        key={index}
                        title={menuItem.title}
                    />
                ))
            }
            
            <SubMenu
                options={MENU_OPTIONS}
                selectedMenuItem={props.selectedMenuItem}
            />
        </MenuContainer>
    );
};

export default Menu;
