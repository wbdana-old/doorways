import styled from '../styled-components';

export const GuiTab = styled.div`
    border-bottom: 50px solid transparent;
    border-left: 50px solid transparent;
    border-right: 50px solid ${props => props.theme.secondaryColor};
    border-top: 50px solid ${props => props.theme.secondaryColor};
    height: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
`;
