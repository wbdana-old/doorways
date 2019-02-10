import * as React from 'react';
import {
    DoorwaysContainer,
    DoorwaysTextContainer,
    MenuContainer,
    MenuContainerWrapper,
} from '../../styled/components/gui';
import MenuItem from './MenuItem';
import SubMenu from "./SubMenu";
import { MENU_OPTIONS } from './MenuOptions';

export interface IProps {
    handleSelectMenuItem: (id: number) => void;
    selectedMenuItem: number;
}

const Menu = (props: IProps) => {
    const handleSelectMenuItem = (id: number) => {
        props.handleSelectMenuItem(id);
    };

    const renderSubMenu = () => {
        return props.selectedMenuItem !== null;
    };

    return (
        <MenuContainerWrapper subMenu={renderSubMenu()}>
            <DoorwaysContainer>
                <DoorwaysTextContainer>
                    Doorways
                </DoorwaysTextContainer>
                <DoorwaysTextContainer num={true}>
                    95
                </DoorwaysTextContainer>
            </DoorwaysContainer>

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
            </MenuContainer>

            <SubMenu
                options={MENU_OPTIONS}
                selectedMenuItem={props.selectedMenuItem}
            />
        </MenuContainerWrapper>
    );
};

export default Menu;
