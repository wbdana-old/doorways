import styled from '../styled-components';

export const HomeContainer = styled("div")<{ gui: boolean }>`
    background-color: ${props => props.gui ? props.theme.grey : props.theme.primaryColor};
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
`;

