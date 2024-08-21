const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); 

//----- QUESTÃO DOIS -----

const contarVogais = (str) => {
    const vogais = 'aeiouAEIOU';
    return [...str].filter(char => vogais.includes(char)).length;
  };
 
  console.log(contarVogais("Olá, mundo!")); 

  //------ QUESTÃO TRES -----

  const converterTemperatura = (temperaturaCelsius, callback) => {
    return callback(temperaturaCelsius);
  };

  const celsiusParaFahrenheit = (celsius) => (celsius * 9/5) + 32;

  const celsiusParaKelvin = (celsius) => celsius + 273.15;
  const temperaturaCelsius = 25;

  const temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, celsiusParaFahrenheit);
  console.log(`Temperatura em Fahrenheit: ${temperaturaFahrenheit}`); 
  
  const temperaturaKelvin = converterTemperatura(temperaturaCelsius, celsiusParaKelvin);
  console.log(`Temperatura em Kelvin: ${temperaturaKelvin}`); 
  
  