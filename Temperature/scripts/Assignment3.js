function CelToFa (){ 
    let temperatureC=prompt("Enter your temperature in Celsius");
    let fahrenheit=(temperatureC * 9/5) + 32;
    document.getElementById("TempF").innerHTML=fahrenheit.toFixed(2);
} 
function FaToCel (){ 
    let temperatureF=prompt("Enter your temperature in Fahrenheit");
    let celsius=(temperatureF - 32) * 5/9;
    document.getElementById("TempC").innerHTML=celsius.toFixed(2);
} 