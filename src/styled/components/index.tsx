import styled from '../styled-components';

export const Home = styled.div`
    color: ${props => props.theme.primaryColor};
`;

export const Title = styled('h1')<{ isActive: boolean }>`
    color: ${props => props.isActive ? props.theme.primaryColor : props.theme.secondaryColor};
`;
