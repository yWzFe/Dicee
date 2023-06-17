var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
console.log(randomNumber1);
console.log(randomNumber2);
var img1=document.querySelectorAll("IMG");
img1[0].src="images/dice"+randomNumber1+".png";
img1[1].src="images/dice"+randomNumber2+".png";
var text=document.querySelector("h1").innerHTML;
console.log(text)
if(randomNumber1>randomNumber2){
text="Player 1 WON";
}
else if(randomNumber1==randomNumber2){
text="Draw";
}
else{
text="Player 2 WON";
}
 document.querySelector("h1").innerHTML=text;
//NOKTALI VİRGÜLE DİKKAT