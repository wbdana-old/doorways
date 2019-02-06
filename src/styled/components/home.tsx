import styled from '../styled-components';

export const HomeContainer = styled("div")<{ gui: boolean }>`
    background-color: ${props => props.gui ? '#000' : props.theme.grey};
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
`;

