import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as guiActions from '../store/gui/actions';
import Gui from '../components/Gui/Gui';
import {
    GuiActionTypes,
} from '../store/gui';

import { ApplicationState } from '../store';

const mapStateToProps = ({ gui }: ApplicationState) => ({
    selectedMenuItem: gui.selectedMenuItem,
    showMenu: gui.showMenu,
});

const mapDispatchToProps = (dispatch: Dispatch<GuiActionTypes>) => ({
    selectMenuItem: (payload: number) => dispatch(guiActions.selectMenuItem(payload)),
    toggleMenu: () => dispatch(guiActions.toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gui);
