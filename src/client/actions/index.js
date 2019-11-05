import constants from './../../constants';

export const getWeather = payload => ({ type: constants.GET_WEATHER, payload });
export const setWeather = payload => ({ type: constants.SET_WEATHER, payload });
export const toggleModal = payload => ({ type: constants.TOGGLE_MODAL, payload });