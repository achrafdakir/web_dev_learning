function estPremier(nbr){

    for (let index = 2; index < nbr; index++) {
        let message = '';
        if (nbr%index === 0){
            message = nbr + " n'est pas un nombre premier, il est divisible par "+index;
            return message;
        }       
    }
    message = nbr + " est un nombre premier";
    return message;
}
console.log(estPremier(7));
console.log(estPremier(25));