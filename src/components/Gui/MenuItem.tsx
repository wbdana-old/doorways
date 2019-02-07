import * as React from 'react';
import {
    MenuItemContainer,
} from '../../styled/components/gui';

export interface IProps {
    // TODO WBD add icons for MenuItems
    handleSelectMenuItem?: (id: number) => void;
    id: number;
    key: number;
    title: string;
}

const MenuItem = (props: IProps) => {
    const { id, title } = props;

    const handleSelectMenuItem = () => {
        if (props.handleSelectMenuItem) {
            props.handleSelectMenuItem(id);
        }
    };

    return (
        <MenuItemContainer
            onClick={handleSelectMenuItem}
        >
            {title}
        </MenuItemContainer>
    );
};

export default MenuItem;
