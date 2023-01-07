const convertToCelsius = function(temp) {
  let result = (temp-32)/1.8000;
  result = Math.round(result * 10)/10;
  return result;
};

const convertToFahrenheit = function(temp) {
  let result = (temp*1.8000) + 32;
  result = Math.round(result * 10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
