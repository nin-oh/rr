let nbr1 =prompt(10);
let nbr2=prompt(20);
let nbr3=prompt(-1);
if(nbr1>nbr2 && nbr1>nbr3)
{
    if(nbr2>nbr3)
    {alert(nbr1);alert(nbr2);alert(nbr3);}
    else alert(nbr1);alert(nbr3);alert(nbr2);
}
else if(nbr2>nbr1 && nbr2>nbr3)
{
    if(nbr1>nbr3)
    {alert(nbr2);alert(nbr1);alert(nbr3);}
    else alert(nbr2);alert(nbr3);alert(nbr1);
}
else if(nbr3>nbr2 && nbr3>nbr1)
{
    if(nbr2>nbr1)
    {alert(nbr3);alert(nbr2);alert(nbr1);}
    else alert(nbr2);alert(nbr1);alert(nbr3);
}
