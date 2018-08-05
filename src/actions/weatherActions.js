import { GET_CURRENT_WEATHER, GET_COMING_WEATHER } from './types';
import axios from 'axios';

export const getCurrentWeather = coordinates => async dispatch => {
  // const { lon, lat } = coordinates;

  // const res = await axios.get(
  //   `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${
  //     process.env.REACT_APP_WEATHER_API_KEY
  //   }`
  // );

  const res = {
    data: {
      coord: {
        lon: 139.01,
        lat: 35.02
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      base: 'stations',
      main: {
        temp: 285.514,
        pressure: 1013.75,
        humidity: 100,
        temp_min: 285.514,
        temp_max: 285.514,
        sea_level: 1023.22,
        grnd_level: 1013.75
      },
      wind: {
        speed: 5.52,
        deg: 311
      },
      clouds: {
        all: 0
      },
      dt: 1485792967,
      sys: {
        message: 0.0025,
        country: 'JP',
        sunrise: 1485726240,
        sunset: 1485763863
      },
      id: 1907296,
      name: 'Tawarano',
      cod: 200
    }
  };

  dispatch({
    type: GET_CURRENT_WEATHER,
    payload: res.data
  });
};

export const getComingWeather = coordinates => async dispatch => {
  const res = {
    cod: '200',
    message: 0.1059,
    cnt: 40,
    list: [
      {
        dt: 1533405600,
        main: {
          temp: 20.46,
          temp_min: 20.46,
          temp_max: 21.5,
          pressure: 1021.23,
          sea_level: 1023.85,
          grnd_level: 1021.23,
          humidity: 70,
          temp_kf: -1.04
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 32
        },
        wind: {
          speed: 2.05,
          deg: 353.5
        },
        rain: {
          '3h': 0.1225
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-04 18:00:00'
      },
      {
        dt: 1533416400,
        main: {
          temp: 18.05,
          temp_min: 18.05,
          temp_max: 18.83,
          pressure: 1021.56,
          sea_level: 1024.05,
          grnd_level: 1021.56,
          humidity: 85,
          temp_kf: -0.78
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 2.16,
          deg: 5.50168
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-04 21:00:00'
      },
      {
        dt: 1533427200,
        main: {
          temp: 16.08,
          temp_min: 16.08,
          temp_max: 16.6,
          pressure: 1021.3,
          sea_level: 1023.84,
          grnd_level: 1021.3,
          humidity: 97,
          temp_kf: -0.52
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '02n'
          }
        ],
        clouds: {
          all: 8
        },
        wind: {
          speed: 1.22,
          deg: 346.501
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-05 00:00:00'
      },
      {
        dt: 1533438000,
        main: {
          temp: 15.36,
          temp_min: 15.36,
          temp_max: 15.62,
          pressure: 1020.63,
          sea_level: 1023.15,
          grnd_level: 1020.63,
          humidity: 100,
          temp_kf: -0.26
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d'
          }
        ],
        clouds: {
          all: 20
        },
        wind: {
          speed: 0.98,
          deg: 263.002
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-05 03:00:00'
      },
      {
        dt: 1533448800,
        main: {
          temp: 19.34,
          temp_min: 19.34,
          temp_max: 19.34,
          pressure: 1020.12,
          sea_level: 1022.61,
          grnd_level: 1020.12,
          humidity: 80,
          temp_kf: 0
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d'
          }
        ],
        clouds: {
          all: 68
        },
        wind: {
          speed: 1.43,
          deg: 253.501
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-05 06:00:00'
      },
      {
        dt: 1533459600,
        main: {
          temp: 22.76,
          temp_min: 22.76,
          temp_max: 22.76,
          pressure: 1018.93,
          sea_level: 1021.65,
          grnd_level: 1018.93,
          humidity: 61,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.42,
          deg: 212.504
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-05 09:00:00'
      },
      {
        dt: 1533470400,
        main: {
          temp: 24.05,
          temp_min: 24.05,
          temp_max: 24.05,
          pressure: 1017.79,
          sea_level: 1020.47,
          grnd_level: 1017.79,
          humidity: 57,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 36
        },
        wind: {
          speed: 2.67,
          deg: 235.508
        },
        rain: {
          '3h': 0.045
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-05 12:00:00'
      },
      {
        dt: 1533481200,
        main: {
          temp: 18.48,
          temp_min: 18.48,
          temp_max: 18.48,
          pressure: 1018.09,
          sea_level: 1020.55,
          grnd_level: 1018.09,
          humidity: 95,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 80
        },
        wind: {
          speed: 3.56,
          deg: 292.002
        },
        rain: {
          '3h': 1.775
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-05 15:00:00'
      },
      {
        dt: 1533492000,
        main: {
          temp: 19.25,
          temp_min: 19.25,
          temp_max: 19.25,
          pressure: 1018.74,
          sea_level: 1021.27,
          grnd_level: 1018.74,
          humidity: 79,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 8
        },
        wind: {
          speed: 3.87,
          deg: 323.5
        },
        rain: {
          '3h': 0.31
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-05 18:00:00'
      },
      {
        dt: 1533502800,
        main: {
          temp: 16.69,
          temp_min: 16.69,
          temp_max: 16.69,
          pressure: 1020.07,
          sea_level: 1022.68,
          grnd_level: 1020.07,
          humidity: 90,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.02,
          deg: 334.002
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-05 21:00:00'
      },
      {
        dt: 1533513600,
        main: {
          temp: 14.2,
          temp_min: 14.2,
          temp_max: 14.2,
          pressure: 1020.24,
          sea_level: 1022.83,
          grnd_level: 1020.24,
          humidity: 100,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '02n'
          }
        ],
        clouds: {
          all: 8
        },
        wind: {
          speed: 1.32,
          deg: 322.002
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-06 00:00:00'
      },
      {
        dt: 1533524400,
        main: {
          temp: 12.9,
          temp_min: 12.9,
          temp_max: 12.9,
          pressure: 1019.8,
          sea_level: 1022.29,
          grnd_level: 1019.8,
          humidity: 100,
          temp_kf: 0
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d'
          }
        ],
        clouds: {
          all: 24
        },
        wind: {
          speed: 1.22,
          deg: 205.5
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-06 03:00:00'
      },
      {
        dt: 1533535200,
        main: {
          temp: 17.74,
          temp_min: 17.74,
          temp_max: 17.74,
          pressure: 1019,
          sea_level: 1021.65,
          grnd_level: 1019,
          humidity: 83,
          temp_kf: 0
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d'
          }
        ],
        clouds: {
          all: 20
        },
        wind: {
          speed: 1.52,
          deg: 167.003
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-06 06:00:00'
      },
      {
        dt: 1533546000,
        main: {
          temp: 21.04,
          temp_min: 21.04,
          temp_max: 21.04,
          pressure: 1018.71,
          sea_level: 1021.37,
          grnd_level: 1018.71,
          humidity: 63,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d'
          }
        ],
        clouds: {
          all: 36
        },
        wind: {
          speed: 1.18,
          deg: 341
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-06 09:00:00'
      },
      {
        dt: 1533556800,
        main: {
          temp: 22.29,
          temp_min: 22.29,
          temp_max: 22.29,
          pressure: 1018.6,
          sea_level: 1021.3,
          grnd_level: 1018.6,
          humidity: 53,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d'
          }
        ],
        clouds: {
          all: 36
        },
        wind: {
          speed: 2.52,
          deg: 310.002
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-06 12:00:00'
      },
      {
        dt: 1533567600,
        main: {
          temp: 22.03,
          temp_min: 22.03,
          temp_max: 22.03,
          pressure: 1018.85,
          sea_level: 1021.44,
          grnd_level: 1018.85,
          humidity: 52,
          temp_kf: 0
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d'
          }
        ],
        clouds: {
          all: 64
        },
        wind: {
          speed: 3,
          deg: 304.503
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-06 15:00:00'
      },
      {
        dt: 1533578400,
        main: {
          temp: 20.88,
          temp_min: 20.88,
          temp_max: 20.88,
          pressure: 1019.44,
          sea_level: 1021.96,
          grnd_level: 1019.44,
          humidity: 54,
          temp_kf: 0
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d'
          }
        ],
        clouds: {
          all: 20
        },
        wind: {
          speed: 2.9,
          deg: 297.5
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-06 18:00:00'
      },
      {
        dt: 1533589200,
        main: {
          temp: 16.94,
          temp_min: 16.94,
          temp_max: 16.94,
          pressure: 1020.36,
          sea_level: 1022.87,
          grnd_level: 1020.36,
          humidity: 75,
          temp_kf: 0
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        clouds: {
          all: 12
        },
        wind: {
          speed: 2.37,
          deg: 271.501
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-06 21:00:00'
      },
      {
        dt: 1533600000,
        main: {
          temp: 14.82,
          temp_min: 14.82,
          temp_max: 14.82,
          pressure: 1020.96,
          sea_level: 1023.47,
          grnd_level: 1020.96,
          humidity: 92,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 2.12,
          deg: 261.001
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-07 00:00:00'
      },
      {
        dt: 1533610800,
        main: {
          temp: 13.44,
          temp_min: 13.44,
          temp_max: 13.44,
          pressure: 1021.27,
          sea_level: 1023.92,
          grnd_level: 1021.27,
          humidity: 100,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.93,
          deg: 250.003
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-07 03:00:00'
      },
      {
        dt: 1533621600,
        main: {
          temp: 18.64,
          temp_min: 18.64,
          temp_max: 18.64,
          pressure: 1022.05,
          sea_level: 1024.62,
          grnd_level: 1022.05,
          humidity: 71,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.35,
          deg: 262.5
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-07 06:00:00'
      },
      {
        dt: 1533632400,
        main: {
          temp: 22.65,
          temp_min: 22.65,
          temp_max: 22.65,
          pressure: 1022.19,
          sea_level: 1024.87,
          grnd_level: 1022.19,
          humidity: 50,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.35,
          deg: 215.002
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-07 09:00:00'
      },
      {
        dt: 1533643200,
        main: {
          temp: 23.87,
          temp_min: 23.87,
          temp_max: 23.87,
          pressure: 1022.1,
          sea_level: 1024.79,
          grnd_level: 1022.1,
          humidity: 45,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.56,
          deg: 220.501
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-07 12:00:00'
      },
      {
        dt: 1533654000,
        main: {
          temp: 24.07,
          temp_min: 24.07,
          temp_max: 24.07,
          pressure: 1021.73,
          sea_level: 1024.51,
          grnd_level: 1021.73,
          humidity: 48,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d'
          }
        ],
        clouds: {
          all: 32
        },
        wind: {
          speed: 2.16,
          deg: 222.501
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-07 15:00:00'
      },
      {
        dt: 1533664800,
        main: {
          temp: 22.48,
          temp_min: 22.48,
          temp_max: 22.48,
          pressure: 1021.9,
          sea_level: 1024.59,
          grnd_level: 1021.9,
          humidity: 57,
          temp_kf: 0
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d'
          }
        ],
        clouds: {
          all: 36
        },
        wind: {
          speed: 2.72,
          deg: 202.501
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-07 18:00:00'
      },
      {
        dt: 1533675600,
        main: {
          temp: 19.68,
          temp_min: 19.68,
          temp_max: 19.68,
          pressure: 1022.83,
          sea_level: 1025.34,
          grnd_level: 1022.83,
          humidity: 78,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.12,
          deg: 190.004
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-07 21:00:00'
      },
      {
        dt: 1533686400,
        main: {
          temp: 18.37,
          temp_min: 18.37,
          temp_max: 18.37,
          pressure: 1023.1,
          sea_level: 1025.69,
          grnd_level: 1023.1,
          humidity: 94,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.12,
          deg: 175.002
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-08 00:00:00'
      },
      {
        dt: 1533697200,
        main: {
          temp: 18.44,
          temp_min: 18.44,
          temp_max: 18.44,
          pressure: 1022.94,
          sea_level: 1025.54,
          grnd_level: 1022.94,
          humidity: 93,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.41,
          deg: 166.5
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-08 03:00:00'
      },
      {
        dt: 1533708000,
        main: {
          temp: 22.17,
          temp_min: 22.17,
          temp_max: 22.17,
          pressure: 1022.88,
          sea_level: 1025.49,
          grnd_level: 1022.88,
          humidity: 77,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 2.57,
          deg: 161
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-08 06:00:00'
      },
      {
        dt: 1533718800,
        main: {
          temp: 25.87,
          temp_min: 25.87,
          temp_max: 25.87,
          pressure: 1022.59,
          sea_level: 1025.13,
          grnd_level: 1022.59,
          humidity: 53,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 4.13,
          deg: 174.001
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-08 09:00:00'
      },
      {
        dt: 1533729600,
        main: {
          temp: 26.33,
          temp_min: 26.33,
          temp_max: 26.33,
          pressure: 1021.54,
          sea_level: 1024.11,
          grnd_level: 1021.54,
          humidity: 49,
          temp_kf: 0
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d'
          }
        ],
        clouds: {
          all: 64
        },
        wind: {
          speed: 5.6,
          deg: 163.002
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-08 12:00:00'
      },
      {
        dt: 1533740400,
        main: {
          temp: 25.86,
          temp_min: 25.86,
          temp_max: 25.86,
          pressure: 1020.36,
          sea_level: 1022.87,
          grnd_level: 1020.36,
          humidity: 50,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 56
        },
        wind: {
          speed: 6.77,
          deg: 168.502
        },
        rain: {
          '3h': 0.05
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-08 15:00:00'
      },
      {
        dt: 1533751200,
        main: {
          temp: 24.19,
          temp_min: 24.19,
          temp_max: 24.19,
          pressure: 1018.88,
          sea_level: 1021.35,
          grnd_level: 1018.88,
          humidity: 62,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 24
        },
        wind: {
          speed: 5.81,
          deg: 183.002
        },
        rain: {
          '3h': 0.48
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-08 18:00:00'
      },
      {
        dt: 1533762000,
        main: {
          temp: 23.12,
          temp_min: 23.12,
          temp_max: 23.12,
          pressure: 1018.73,
          sea_level: 1021.23,
          grnd_level: 1018.73,
          humidity: 70,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n'
          }
        ],
        clouds: {
          all: 12
        },
        wind: {
          speed: 5.01,
          deg: 194.004
        },
        rain: {
          '3h': 0.41
        },
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-08 21:00:00'
      },
      {
        dt: 1533772800,
        main: {
          temp: 23.25,
          temp_min: 23.25,
          temp_max: 23.25,
          pressure: 1018.77,
          sea_level: 1021.46,
          grnd_level: 1018.77,
          humidity: 68,
          temp_kf: 0
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n'
          }
        ],
        clouds: {
          all: 64
        },
        wind: {
          speed: 4.36,
          deg: 183.502
        },
        rain: {},
        sys: {
          pod: 'n'
        },
        dt_txt: '2018-08-09 00:00:00'
      },
      {
        dt: 1533783600,
        main: {
          temp: 22.09,
          temp_min: 22.09,
          temp_max: 22.09,
          pressure: 1018.63,
          sea_level: 1021.23,
          grnd_level: 1018.63,
          humidity: 75,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 56
        },
        wind: {
          speed: 4.01,
          deg: 185.501
        },
        rain: {
          '3h': 0.06
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-09 03:00:00'
      },
      {
        dt: 1533794400,
        main: {
          temp: 23.37,
          temp_min: 23.37,
          temp_max: 23.37,
          pressure: 1019.77,
          sea_level: 1022.35,
          grnd_level: 1019.77,
          humidity: 70,
          temp_kf: 0
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: {
          all: 36
        },
        wind: {
          speed: 3.21,
          deg: 195.003
        },
        rain: {
          '3h': 0.28
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-09 06:00:00'
      },
      {
        dt: 1533805200,
        main: {
          temp: 26.86,
          temp_min: 26.86,
          temp_max: 26.86,
          pressure: 1020.73,
          sea_level: 1023.38,
          grnd_level: 1020.73,
          humidity: 51,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 2.76,
          deg: 226.001
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-09 09:00:00'
      },
      {
        dt: 1533816000,
        main: {
          temp: 28.42,
          temp_min: 28.42,
          temp_max: 28.42,
          pressure: 1021.67,
          sea_level: 1024.42,
          grnd_level: 1021.67,
          humidity: 41,
          temp_kf: 0
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.62,
          deg: 227.501
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-09 12:00:00'
      },
      {
        dt: 1533826800,
        main: {
          temp: 28.41,
          temp_min: 28.41,
          temp_max: 28.41,
          pressure: 1022.27,
          sea_level: 1025.08,
          grnd_level: 1022.27,
          humidity: 37,
          temp_kf: 0
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d'
          }
        ],
        clouds: {
          all: 24
        },
        wind: {
          speed: 4.05,
          deg: 224.002
        },
        rain: {},
        sys: {
          pod: 'd'
        },
        dt_txt: '2018-08-09 15:00:00'
      }
    ],
    city: {
      id: 2673730,
      name: 'Stockholm',
      coord: {
        lat: 59.3326,
        lon: 18.0649
      },
      country: 'SE',
      population: 1000000
    }
  };

  dispatch({
    type: GET_COMING_WEATHER,
    payload: res.list.filter(x => new Date(x.dt * 1000).getHours() === 14)
  });
};
