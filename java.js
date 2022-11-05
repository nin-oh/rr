

tab=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for(let i = 0; i < 16 ; i++)
{
    if(Number(tab[i])%3==0 && Number(tab[i])%5!=0){
       alert("multiple de trois");
    }
    else if(Number(tab[i])%5==0 &&  Number(tab[i])%3!=0){ alert("multiple de cinq")}
     else if(Number(tab[i])%5!=0 && Number(tab[i])%3!=0){ alert(tab[i]);}
}

