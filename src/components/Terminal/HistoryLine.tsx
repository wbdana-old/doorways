import * as React from 'react';
import { StyledHistoryLine } from '../../styled/components/historyLine';

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
            <div>
                guest@wbdana $ {historyItem.command}
            </div>
            <div>
                {historyItem.result}
            </div>
        </StyledHistoryLine>
    );
}

export default HistoryLine;