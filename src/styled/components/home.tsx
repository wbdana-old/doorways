import styled from '../styled-components';

export const HomeContainer = styled.div`
    background-color: ${props => props.theme.primaryColor}
    color: ${props => props.theme.secondaryColor};
    flex: 1;
    font-family: Hack, monospace;
    height: 100%;
    min-height: 100%;
    
    * {
        font-family: Hack, monospace;
    }
`;

export const PromptInput = styled.input`
    background-color: ${props => props.theme.primaryColor}
    border: 0px solid;
    color: ${props => props.theme.secondaryColor};
`;