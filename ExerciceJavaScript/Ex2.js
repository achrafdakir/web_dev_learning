function hjms(secondes){
    let message = "cette durée équivaut à ";
    console.log("Une durée en secondes : ",secondes);
    let jours = Math.floor(secondes / (24*60*60));
    let reste = secondes % (24*60*60);
    let hours = Math.floor(reste / (60*60));
    reste = reste % (60*60);
    let minutes = Math.floor(reste/60);
    reste = reste %60;
    if(jours != 0){
        message = message+" "+jours+" jours";
    }
    if(hours != 0){
        message = message+" "+hours+" heures";
    }
    if(minutes != 0){
        message = message+" "+minutes+" minutes";
    }
    if(reste != 0){
        message = message +" "+reste+ " secondes";
    }
    console.log(message);
}
hjms(235789);
console.log("============================");
hjms(3621);