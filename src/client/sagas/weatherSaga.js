import { put, call, takeLatest, fork, select, take, delay, apply } from 'redux-saga/effects';
import * as selectors from '../selectors';
import * as actions from '../actions';
import * as constants from '../../constants';

export default function* watchUsersSaga() {
    yield takeLatest(actions.getWeather().type, getWeatherFromUrl);
}

function* getWeatherFromUrl(action) {
    const city = action.payload;
    const response = yield call(fetch, `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b474aa0006c665bf1049403ef8c8ac6`);
    const data = yield apply(response, response.json);
    const newData = {
        icon: data.weather[0].icon,
        temp: String(data.main.temp),
        pressure: String(data.main.pressure),
        humidity: String(data.main.humidity),
        description: data.weather[0].description,
        city: data.name,
    };
    console.log(data);
    yield put(actions.setWeather(newData));
}