function triangle1(taille){
    console.log("Un motif de taille = ",taille);
    let i = 0;
    let ligne = '';
    while (i < taille) {
        ligne+='*';
        i++;
        console.log(ligne);
    }
}
function triangle2(taille){
    console.log("Un motif de taille = ",taille);
    let ligne = '';
    for (let i = 0; i < taille; i++) {
        ligne+='*'; 
        console.log(ligne);
    }

}
triangle1(3);
triangle2(4);