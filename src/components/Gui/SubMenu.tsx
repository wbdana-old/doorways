import * as React from 'react';
import SubMenuItem from '../../containers/SubMenuItem';
import {
    SubMenuContainer,
} from '../../styled/components/gui';

export interface IProps {
    options: IOptions[];
    selectedMenuItem: number;
}

export interface IOptions {
    title: string;
    subs: any[]; // TODO WBD be more specific
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
                    url={sub.url}
                    application={sub.application}
                />
            ))}
        </SubMenuContainer>
    );
};

export default SubMenu;
