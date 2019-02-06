import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as guiActions from '../store/gui/actions';
import Gui from '../components/Gui';
import {
    GuiActionTypes,
} from '../store/gui';

import { ApplicationState } from '../store';

const mapStateToProps = ({ gui }: ApplicationState) => ({
    showMenu: gui.showMenu,
});

const mapDispatchToProps = (dispatch: Dispatch<GuiActionTypes>) => ({
    toggleMenu: () => dispatch(guiActions.toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gui);
