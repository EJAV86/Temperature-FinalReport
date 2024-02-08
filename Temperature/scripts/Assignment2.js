function ConvertTemperature(){ 
    let temperature = prompt("Enter temperature in Celsius: ");
    let Fahrenheit = (temperature * 9/5) + 32;
    document.getElementById("temp").innerHTML=Fahrenheit;
} 
