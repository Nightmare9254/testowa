
export function roll(tab){

    let rand;

    function random(){
        rand = Math.floor(Math.random() * (101 - 1) + 1)
    }

    while(tab.length !== 100){
        random();
        if(tab.indexOf(rand) == -1){
            tab.push(rand);
        }
    }


}

