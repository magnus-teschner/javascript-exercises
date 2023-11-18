const convertToCelsius = function(fahrenheit) {
  return +((5 / 9) * (fahrenheit - 32)).toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  return +((9 / 5) * celsius + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
