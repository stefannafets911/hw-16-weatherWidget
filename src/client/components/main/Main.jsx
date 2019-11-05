import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Modal from '../../reactlibs/Modal';

import {
    Wrapper,
    CityColumn,
    CityButton,
    WeatherCity,
    WeatherIcon,
    WeatherTemp,
    WeatherBlock,
    WeatherInnerBlock,
    WeatherDescription,
    WeatherHumidity,
    WeatherPressure,
    WeatherAdditionalInf,
    MainBars,
} from './styledComponent';

export class Main extends PureComponent {
    static propTypes = {
        getWeather: PropTypes.func.isRequired,
        toggleModal: PropTypes.func.isRequired,
        isModalOpen: PropTypes.bool.isRequired,
        getCityState: PropTypes.string.isRequired,
        getTempState: PropTypes.string.isRequired,
        getIconState: PropTypes.string.isRequired,
        getWeatherState: PropTypes.object.isRequired,
        getPressureState: PropTypes.string.isRequired,
        getHumidityState: PropTypes.string.isRequired,
        getDescriptionState: PropTypes.string.isRequired,
    };

    getWeather = (e) => {
        this.props.getWeather(e.target.id);
        this.props.toggleModal();
    };

    render() {
        const {
            getWeather,
        } = this;

        const {
            getTempState,
            getIconState,
            getCityState,
            getPressureState,
            getHumidityState,
            getDescriptionState,
            toggleModal,
            isModalOpen,
        } = this.props;
        return (
            <Wrapper isModalOpen={isModalOpen}>
                <MainBars onClick={toggleModal} isModalOpen={isModalOpen}/>
                <WeatherBlock getTempState={getTempState}>
                    <WeatherTemp
                        children={ getTempState ? Math.round(getTempState - 270) + '°' : '' }
                    />
                    <WeatherInnerBlock>
                        <WeatherIcon
                            src = { getIconState ? `https://openweathermap.org/img/w/${getIconState}.png` : '' }
                        />
                        <WeatherDescription
                            children = { getDescriptionState }
                        />
                    </WeatherInnerBlock>
                    <WeatherCity
                        children = { getCityState }
                    />
                    <WeatherAdditionalInf>
                        <WeatherHumidity getHumidityState={getHumidityState}
                            children = {getHumidityState + '%'}
                        />
                        <WeatherPressure getPressureState={getPressureState}
                            children = {getPressureState}
                        />
                    </WeatherAdditionalInf>
                </WeatherBlock>
                <Modal
                    isOpen={isModalOpen}
                    onClose={toggleModal}>
                    <CityColumn>
                        <CityButton
                            id = {'London'}
                            children = {'London'}
                            onClick={((e) => getWeather(e))}
                        />
                        <CityButton
                            id = {'Rome'}
                            children = {'Rome'}
                            onClick={((e) => getWeather(e))}
                        />
                        <CityButton
                            id = {'Kiev'}
                            children = {'Kiev'}
                            onClick={((e) => getWeather(e))}
                        />

                        <CityButton
                            id = {'Munich'}
                            children = {'Munich'}
                            onClick={((e) => getWeather(e))}
                        />
                    </CityColumn>
                </Modal>
            </Wrapper>

        );
    }
}

export default Main;