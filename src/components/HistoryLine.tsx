import * as React from 'react';
import { StyledHistoryLine } from '../styled/components/historyLine';

export interface IProps {
    command: string;
}

function HistoryLine(props: IProps) {
    return (
        <StyledHistoryLine>
           $ {props.command}
        </StyledHistoryLine>
    );
}

export default HistoryLine;