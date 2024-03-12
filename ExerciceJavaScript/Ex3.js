function troisNombre(nbr1,nbr2,nbr3){
    let max,med,min;
    if(nbr1>=nbr2 && nbr1>=nbr3){
        max = nbr1;
        if(nbr2>nbr3){
            med = nbr2;
            min = nbr3;
        }else{
            med = nbr3;
            min = nbr2;
        }
    }else if(nbr2>=nbr1 && nbr2>=nbr3){
        max = nbr2;
        if(nbr1>nbr3){
            med = nbr1;
            min = nbr3;
        }else{
            med = nbr3;
            min = nbr1;
        }
    }else{
        max= nbr3;
        if(nbr1>nbr2){
            med = nbr1;
            min = nbr2;
        }else{
            med = nbr2;
            min = nbr1;
        }
    }
    console.log(min+" "+med+" "+max);
}
troisNombre(4,2,1)