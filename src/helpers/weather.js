import axios from 'axios';

export const weatherIcon = id => {
  if (id === '01d') {
    return 'clear-sky-day';
  } else if (id === '01n') {
    return 'clear-sky-night';
  } else if (id === '02d') {
    return 'few-clouds-day';
  } else if (id === '02n') {
    return 'few-clouds-night';
  } else if (id === '03d' || id === '03n') {
    return 'scattered-clouds';
  } else if (id === '04d' || id === '04n') {
    return 'broken-clouds';
  } else if (id === '09d' || id === '09n' || id === '10d' || id === '10n') {
    return 'rain';
  } else if (id === '11d' || id === '11n') {
    return 'thunderstorm';
  } else if (id === '13d' || id === '13n') {
    return 'snow';
  } else if (id === '50d' || id === '50n') {
    return 'fog';
  }
};
