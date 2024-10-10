document.getElementById('convert-btn').addEventListener('click', function() {
    let temperature = document.getElementById('temperature').value;
    let selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    
    // Validate if input is a valid number
    if (isNaN(temperature) || temperature === '') {
      alert('Please enter a valid number');
      return;
    }
    
    // Convert the temperature
    temperature = parseFloat(temperature);
    let celsius, fahrenheit, kelvin;
    
    if (selectedUnit === 'Celsius') {
      celsius = temperature;
      fahrenheit = (temperature * 9/5) + 32;
      kelvin = temperature + 273.15;
    } else if (selectedUnit === 'Fahrenheit') {
      celsius = (temperature - 32) * 5/9;
      fahrenheit = temperature;
      kelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (selectedUnit === 'Kelvin') {
      celsius = temperature - 273.15;
      fahrenheit = (temperature - 273.15) * 9/5 + 32;
      kelvin = temperature;
    }
    
    // Display the converted temperatures
    document.getElementById('celsius-result').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheit-result').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvin-result').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
  });
  