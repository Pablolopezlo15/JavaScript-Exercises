const sum = (num1, num2) => num1 + num2;

console.log("the answer to everything is", sum(42, 8));
//---------------------------------------------------------

const stringLength = (str) => console.log(`the length of "${str}" is:`, str.length);
let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
console.log(stringLength(longestCityNameInTheWorld));

//---------------------------------------------------------

const stringLength1 = (str) => console.log(`The length of"${str}" is:`, str.length);
console.log(stringLength1("willynilly"));

//---------------------------------------------------------

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
const showAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
showAlert("Pablo");

//--------------------------------------------------------

const oneTwoThreeRotate = () => Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';});
oneTwoThreeRotate();

//--------------------------------------------------------

nombre = "Pablo López";
edad = "19";
const nombreEdad = (nombre,edad) => {console.log(`Hello, I am ${nombre} and I am ${edad}`);}
nombreEdad(nombre,edad);

//---------------------------------------------------------

const sumArray = (arr) => arr.reduce((total, current) => total + current, 0);

const numbers = [1,2,3,4,5,6,7,8];
const result = sumArray(numbers);
console.log(result); 

//---------------------------------------------------------
let eye = "eye";
const fire = () => "bulls-";


//---------------------------------------------------------
const fibonacci = (n) => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));


