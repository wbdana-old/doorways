import styled from '../styled-components';

export const TerminalContainer = styled.div`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    font-family: Hack, monospace;
    min-height: 100%;
    
    * {
        font-family: Hack, monospace;
    }
`;

export const PromptInput = styled.input`
    background-color: ${props => props.theme.primaryColor}
    border: 0px solid;
    caret-color: ${props => props.theme.grey}
    color: ${props => props.theme.secondaryColor};
    font-family: Hack, monospace;
    font-size: inherit;
    
    &:focus {
        outline: none;
    }
`;