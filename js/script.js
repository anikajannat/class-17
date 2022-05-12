
var num = 56

if(num>=80 && num<=100){
    document.write('A+')
}
else if(num>=70 && num<=79){
    document.write('A')
}
else if(num>=60 && num<=69){
    document.write('A-')
}
else if(num>=50 && num<=59){
    document.write('B')
}
else if(num>=40 && num<=49){
    document.write('C')
}
else if(num>=30 && num<=39){
    document.write('D')
}
else{
    document.write('failed')
}

//100 to 1 print:

for(var i = 100; i>=1; i--){
    document.write(i +'<br>')
}
//detect odd and even number

var num = 20;
document.write(num+ "<br>")
if(num % 2 == 0){
    document.write('Number is even-thx')
}else{
    document.write('Number is odd-thank you')
}
