function convertTemperatureRange(){
    let startValue = parseFloat(prompt("Enter starting temperature:"));
    let endValue = parseFloat(prompt("Enter ending temperature:"));
    let scale = prompt("Enter scale ('C' for Celsius, 'F' for Fahrenheit):");

    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;
        if (scale === "C") {
            convertedTemp = (temp * 9/5 ) + 32;
            document.getElementById("Temp-Result").innerHTML=(temp + "°C is equal to " + convertedTemp + "°F");
        } else if (scale === "F") {
            convertedTemp = (temp - 32) * 5/9;
            document.getElementById("Temp-Result").innerHTML=(temp + "°F is equal to " + convertedTemp + "°C");
        } else {
            document.getElementById("error-message").innerHTML = "Invalid scale. Please enter 'C' for Celsius or 'F' for Fahrenheit.";return;
        }
    }
}

convertTemperatureRange();