import * as React from 'react';
import { StyledHistoryLine } from '../styled/components/historyLine';

export interface IProps {
    historyItem: {
        command: string;
        result: string;
    };
}

function HistoryLine(props: IProps) {
    const { historyItem } = props;
    return (
        <StyledHistoryLine>
            <StyledHistoryLine>
                $ {historyItem.command}
            </StyledHistoryLine>
            <StyledHistoryLine>
                {historyItem.result}
            </StyledHistoryLine>
        </StyledHistoryLine>
    );
}

export default HistoryLine;