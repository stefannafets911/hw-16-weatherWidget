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

    getWeather = (cityName) => {
        this.props.getWeather(cityName);
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
                    <WeatherTemp>
                        { getTempState ? Math.round(getTempState - 270) + '°' : '' }
                    </WeatherTemp>
                    <WeatherInnerBlock>
                        <WeatherIcon
                            src = { getIconState ? `https://openweathermap.org/img/w/${getIconState}.png` : '' }
                        />
                        <WeatherDescription>
                            { getDescriptionState }
                        </WeatherDescription>
                    </WeatherInnerBlock>
                    <WeatherCity>
                        { getCityState }
                    </WeatherCity>
                    <WeatherAdditionalInf>
                        <WeatherHumidity>
                            {getHumidityState + '%'}
                        </WeatherHumidity>
                        <WeatherPressure>
                            {getPressureState}
                        </WeatherPressure>
                    </WeatherAdditionalInf>
                </WeatherBlock>
                <Modal
                    isOpen={isModalOpen}
                    onClose={toggleModal}>
                    <CityColumn>
                        <CityButton
                            onClick={(() => getWeather('London'))}
                            isActive={getCityState === 'London'}>
                            {'London'}
                        </CityButton>
                        <CityButton
                            onClick={(() => getWeather('Rome'))}
                            isActive={getCityState === 'Rome'}>
                            {'Rome'}
                        </CityButton>
                        <CityButton
                            onClick={(() => getWeather('Kiev'))}
                            isActive={getCityState === 'Kiev'}>
                            {'Kiev'}
                        </CityButton>
                        <CityButton
                            onClick={(() => getWeather('Munich'))}
                            isActive={getCityState === 'Munich'}>
                            {'Munich'}
                        </CityButton>
                    </CityColumn>
                </Modal>
            </Wrapper>

        );
    }
}

export default Main;