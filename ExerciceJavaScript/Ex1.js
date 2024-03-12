let tempF;
function degreC(tempF){
    let tempC = (5/9)*(tempF-32);
    console.log("Une température en Fahrenheit : ",tempF);
    console.log("cette température équivaut a ",tempC.toFixed(1) ,"degrés Celsius");
}
degreC(0.0);
degreC(60.0);
