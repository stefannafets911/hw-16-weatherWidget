import * as constants from '../../constants';

const initialState = {
    weather: {
        icon: '',
        temp: '',
        pressure: '',
        humidity: '',
        description: '',
        city: '',
    },
    isModalOpen: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_WEATHER:
            return {
                ...state,
                weather: { ...action.payload },
            };
        case constants.TOGGLE_MODAL:
            const _isModalOpen = !state.isModalOpen;
            return {
                ...state,
                isModalOpen: _isModalOpen,
            };
        default:
            return { ...state };
    }
}