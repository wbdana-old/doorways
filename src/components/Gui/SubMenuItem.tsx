import * as React from 'react';
import {
    MenuItemContainer,
} from '../../styled/components/gui';

export interface IProps {
    id: number;
    key: number;
    title: string;
    callback: () => void;
}

const SubMenuItem = (props: IProps) => {
    const { title, callback } = props;

    const handleSubItemClicked = () => {
        if (callback) {
            callback();
        }
    };

    return (
        <MenuItemContainer
            onClick={handleSubItemClicked}
        >
            {title}
        </MenuItemContainer>
    );
};

export default SubMenuItem;
