import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as homeActions from '../store/home/actions';
// import Home from '../components/Home';
import {
    HomeActionTypes,
} from '../store/home';

import { ApplicationState } from '../store';

const mapStateToProps = ({ home }: ApplicationState) => ({
    showGui: home.showGui,
});

const mapDispatchToProps = (dispatch: Dispatch<HomeActionTypes>) => ({
    showGui: () => dispatch(homeActions.showGui()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
