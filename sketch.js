

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the first variable: ');
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(Swap)

}
  


function draw()
{
}
function Swap(){ 
[a,b]=[b,a]
conosol.log("the value of a after Swapping",+a)
conosol.log("the value of a after Swapping",+b)

}