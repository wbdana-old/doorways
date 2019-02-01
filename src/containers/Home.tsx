import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as homeActions from '../store/home/actions';
import Home from '../components/Home';
import {
    HomeActionTypes,
} from '../store/home';

import { ApplicationState } from '../store';

const mapStateToProps = ({ home }: ApplicationState) => ({
    showGui: home.showGui,
});

const mapDispatchToProps = (dispatch: Dispatch<HomeActionTypes>) => ({
    toggleGui: () => dispatch(homeActions.toggleGui()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
