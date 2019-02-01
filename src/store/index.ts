import {
    combineReducers,
    Dispatch,
    Reducer,
    Action,
    AnyAction,
} from 'redux';
import terminalReducer from './terminal/reducer';

const rootReducer = combineReducers({
    terminal: terminalReducer,
});

export default rootReducer;

// export { default as rootReducer } from './root';