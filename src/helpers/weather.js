const iconTranslationMap = {
  '01d': 'clear-sky-day',
  '01n': 'clear-sky-night',
  '02d': 'few-clouds-day',
  '02n': 'few-clouds-night',
  '03d': 'scattered-clouds',
  '03n': 'scattered-clouds',
  '04d': 'broken-clouds',
  '04n': 'broken-clouds',
  '09d': 'rain',
  '09n': 'rain',
  '10d': 'rain',
  '10n': 'rain',
  '11d': 'thunderstorm',
  '11n': 'thunderstorm',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'fog',
  '50n': 'fog',
};

export const weatherIcon = id => iconTranslationMap[id];
