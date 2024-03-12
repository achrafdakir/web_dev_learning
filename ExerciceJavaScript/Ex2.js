function hjms(secondes){
    console.log("Une durée en secondes : ",secondes);
    let jours = Math.floor(secondes / (24*60*60));
    let reste = secondes % (24*60*60);
    let hours = Math.floor(reste / (60*60));
    reste = reste % (60*60);
    let minutes = Math.floor(reste/60);
    reste = reste %60;
    console.log("cette durée équivaut à ",jours,"jours",hours," heures",minutes,"minutes",reste,"secondes");
}
hjms(235789);