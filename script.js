function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelector = document.getElementById("unitSelector");
    const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

    let convertedTemperature;

    if (selectedUnit === "celsius") {
        // Conversion logic from Celsius to Fahrenheit
        convertedTemperature = (temperatureInput * 9/5) + 32;
    } else if (selectedUnit === "fahrenheit") {
        // Conversion logic from Fahrenheit to Celsius
        convertedTemperature = (temperatureInput - 32) * 5/9;
    } else {
        convertedTemperature = "Invalid unit selection";
    }

    document.getElementById("convertedTemperature").textContent = convertedTemperature.toFixed(2);
}
