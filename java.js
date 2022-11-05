let x = prompt();

let y = prompt();

let z = prompt();

let w = prompt();

let b = prompt();

let tab = [x,y,z,w,b];

let max = tab[0];

for(let i = 0; i < 5 ; i++)
{
    if(Number(tab[i]) > max){
        max = tab[i];
    }
}

alert(max);