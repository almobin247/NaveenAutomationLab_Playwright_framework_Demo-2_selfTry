
 (()=> {
let name:String = 'AMAYA';
let revNAme: String = '';

    for (let i = name.length-1; i >= 0; i-- ) {
        revNAme = revNAme + name[i];
    }

    console.log(revNAme);

})();