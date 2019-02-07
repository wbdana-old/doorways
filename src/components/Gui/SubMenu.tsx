import * as React from 'react';
import SubMenuItem from './SubMenuItem';
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

    if (selectedMenuItem === null) {
        return null;
    }

    return (
        <SubMenuContainer>
            {options[selectedMenuItem].subs.map((sub, index) => (
                <SubMenuItem
                    id={index}
                    key={index}
                    title={sub.title}
                    callback={sub.callback}
                />
            ))}
        </SubMenuContainer>
    );
};

export default SubMenu;
