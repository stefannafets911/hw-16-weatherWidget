import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(100deg, rgba(104,69,133,1) 0%, rgb(70, 46, 99) 35%, rgb(67, 44, 90) 62%, rgba(95,62,122,1) 100%);
`;

export const CityColumn = styled.div`
    border-radius:20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px 0 20px;
`;

export const CityButton = styled.div`
    display: block;
    width: 100%;
    color: white;
    background: ${props => props.isActive ? '#856FD7' : '#4b4562'};
    font-size: 20px;
    font-family: sans-serif;
    text-align: center;
    margin-bottom: 10px;
    height: 35px;
    line-height: 35px;
    border-radius: 6px;
`;

export const WeatherBlock = styled.div`
    display: ${props => props.getTempState ? 'flex' : 'none'};
    flex-direction: column;
    width: 300px;
    background-color: #0000002e;
    border-radius: 20px;
    height: 250px;
    justify-content: center;
`;

export const WeatherInnerBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const WeatherIcon = styled.img`
    width: fit-content;
    display: flex;
    justify-content: center;
`;

export const WeatherTemp = styled.div`
    font-size: 6rem;
    font-family: sans-serif;
    color: white;
    text-shadow: 0 0 7px #00000059;
    display: flex;
    justify-content: center;
`;

export const WeatherAdditionalInf = styled.div.attrs({
})`
    color: white;
    text-shadow: 0 0 7px #00000059;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5rem;
`;

export const WeatherHumidity = styled.div.attrs({
    className: 'fas fa-tint',
})`
    color: white;
    font-size: 1.5rem;
    display: block;
    :before{
        margin-right: 10px;
    }
`;

export const WeatherPressure = styled.div.attrs({
    className: 'fas fa-thermometer-half',
})`
    color: white;
    font-size: 1.5rem;
    display: block;
    :before{
        margin-right: 10px;
    }
`;

export const WeatherDescription = styled.div`
    color: white;
    text-shadow: 0 0 7px #00000059;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-family: sans-serif;
`;

export const WeatherCity = styled.div`
    color: white;
    text-shadow: 0 0 7px #00000059;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    font-family: sans-serif;
`;

export const MainBars = styled.i.attrs({
    className: 'fas fa-bars',
})`
  color: #ffffff;
  cursor: pointer;
  font-size: 30px;
  margin: 0 30px;
  transition: .5s;
  top: 20px;
  right: 0;
  position: absolute;
  display: ${props => props.isModalOpen ? 'none' : 'block'};
`;