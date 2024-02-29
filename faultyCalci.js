let c=Math.random()
let a=prompt("Enter a number")
let b=prompt("Enter 2nd number")
let op=prompt("Enter the operation p for plus, s for subtract , m for multiply and d for divide");
if(c<0.1)
{
    if(op=='p')
    {
      console.log("Sum is"+(a-b))
    }
    else if(op=='m')
    {
        console.log("Multiply is"+(a+b))
    }
    else if(op=='s')
    {
        console.log("Subtraction is"+(a/b))
    }
    else if(op=='d')
    {
        console.log("Division is"+(a**b))
    }
}
else
{
    if(op=='p')
    {
      console.log("Sum is"+(a+b))
    }
    else if(op=='m')
    {
        console.log("Multiply is"+(a*b))
    }
    else if(op=='s')
    {
        console.log("Subtraction is"+(a-b))
    }
    else if(op=='d')
    {
        console.log("Division is"+(a/b))
    }
}