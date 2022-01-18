let bodyColor = document.getElementById('body')
let divColor = document.getElementsByClassName('box')
let container = document.getElementById('container')
let container2 = document.getElementById('container2')
function onColor(){
    container.style.display = 'grid';
    container2.style.display = 'none'
}
const random = (min, max) => Math.round(Math.random() * (max - min));

function randomColor() {
	const r = random(0, 255);
	const g = random(0, 255);
	const b = random(0, 255);
	return `rgb(${r},${g},${b})`;
};
for (let i = 0; i < divColor.length; i++) {
	divColor[i].style.backgroundColor = randomColor();
};
function onImage(){
    container2.style.display = 'grid';
    container.style.display = 'none';
}
container.addEventListener("click", containerClick);
function containerClick(event) {
	if (event.target.className === "box") {
		document.body.style.backgroundImage = "";
		document.body.style.backgroundColor = event.target.style.backgroundColor;
	}
};
container2.addEventListener("click", container2Click)
function container2Click(event){
    if(event.target.className === 'box2'){
    	document.body.style.backgroundColor = "";
		document.body.style.backgroundImage = event.target.style.backgroundImage;
    }
}
