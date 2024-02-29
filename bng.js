let a=Math.random()
let ad,na,end;
if(a<0.1)
{
    ad="Crazy"
}
else if(a>0.1&&a<=0.2)
{
    ad="Fire"
}
else{
    ad="Amazing"
}
if(a<0.5)
{
    na="Engine"
}
else if(a>0.5&&a<=0.7)
{
    na="Foods"
}
else{
    na="Garments"
}
if(a<0.25)
{
    end="Bros"
}
else if(a>0.25&&a<=0.67)
{
    end="Limited"
}
else{
    end="hub"
}
console.log(`${ad}  ${na}  ${end}`)
