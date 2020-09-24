/*-------------------------------SERRI SOLUTIONS---------------------------------------

console.log(data);
var dataObjects = JSON.parse(data);
console.table(dataObjects);
for(var i = 0 ; i < dataObjects.length; i++){
	document.getElementById("result").innerHTML += dataObjects[i].name + ` <img class='img' id='${i}' src='${dataObjects[i].image}'><br>`;
}
function printAge(i){
	console.log(dataObjects[i].age);
}
// console.log(document.getElementsByClassName("img"))
// document.getElementById("result").innerHTML = this
var images = document.getElementsByClassName("img");
images[0].addEventListener("click", function(){
	printAge(this.id)
} ,false);
images[1].addEventListener("click", function(){
	printAge(this.id)
} ,false);
// document.getElementsByClassName("img")[0].addEventListener("click", function(){
// 	printAge(this)
// } ,false)


-------------------------------SERRI SOLUTIONS---------------------------------------
*/


//parsing var sandwiches when we do not have multidimens. array
//parsing var food as a main var when we have multidimens.array
var mydata= JSON.parse(sandwiches);


/*for (let i=0; i<mydata.length; i++){
	console.log(mydata[i]);
	document.getElementById("result").innerHTML += "My favorite sandwich is a " + mydata[i].type + "which is approximately " + mydata[i].calories + ", along with it I enjoy eating " + mydata[i].type + "which have about " + mydata[i].calories + "calories." 
}*/

document.getElementById("result").innerHTML += mydata.sandwich +"has ";
