import * as actions from '../../actions';
import { connect } from 'react-redux';
import Main from './Main.jsx';
import constants from '../../../constants';
import * as selectors from '../../selectors';

export const mapStateToProps = state => ({
    getTempState: selectors.getTempState(state),
    getIconState: selectors.getIconState(state),
    getWeatherState: selectors.getWeatherState(state),
    getPressureState: selectors.getPressureState(state),
    getHumidityState: selectors.getHumidityState(state),
    getDescriptionState: selectors.getDescriptionState(state),
    getCityState: selectors.getCityState(state),
    isModalOpen: selectors.getMainIsModalOpen(state),
});

export const mapDispatchToProps = dispatch => ({
    getWeather: payload => dispatch(actions.getWeather(payload)),
    toggleModal: payload => dispatch(actions.toggleModal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);