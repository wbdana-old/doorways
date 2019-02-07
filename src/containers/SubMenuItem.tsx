import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as homeActions from '../store/home/actions';
import SubMenuItem from '../components/Gui/SubMenuItem';
import {
    HomeActionTypes,
} from '../store/home';

import { ApplicationState } from '../store';

const mapStateToProps = ({ home }: ApplicationState) => ({
    // TODO WBD Put in selected application here when more than one
});

const mapDispatchToProps = (dispatch: Dispatch<HomeActionTypes>) => ({
    toggleGui: () => dispatch(homeActions.toggleGui()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubMenuItem);
