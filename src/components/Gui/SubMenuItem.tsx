import * as React from 'react';
import {
    MenuItemContainer,
} from '../../styled/components/gui';

export interface IProps {
    id: number;
    key: number;
    title: string;
    callback: () => void;
    application: boolean;
    url: string;
    toggleGui: () => void;
}

const SubMenuItem = (props: IProps) => {
    const { application, title, toggleGui, url } = props;

    const handleSubItemClicked = () => {
        if (url) {
            window.open(url, '_blank');
        }
        if (application) {
            console.log(title);
            toggleGui();
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
