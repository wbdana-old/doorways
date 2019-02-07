import * as React from 'react';
import MenuItem from './MenuItem';
import {
    SubMenuContainer,
} from '../../styled/components/gui';

export interface IProps {
    options: IOptions[];
    selectedMenuItem: number;
}

export interface IOptions {
    title: string;
    subs: any[];
}

const SubMenu = (props: IProps) => {
    const { options, selectedMenuItem } = props;

    // TODO WBD Fix this, should be null by default.
    if (selectedMenuItem === undefined) {
        return null;
    }

    return (
        <SubMenuContainer>
            {options[selectedMenuItem].subs.map((sub, index) => (
                <MenuItem
                    id={index}
                    key={index}
                    title={sub.title}
                />
            ))}
        </SubMenuContainer>
    );
};

export default SubMenu;
