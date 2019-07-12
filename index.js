// Import stylesheets
import './style.css';

let people = [];

// Write Javascript code!
const resDiv = document.getElementById('resident');
const history = document.getElementById('history');
const names = document.getElementById("names");
const pickButton = document.getElementById("picker");
const shuffleButton = document.getElementById("shuffler");
const generateButton = document.getElementById("generator");

const generate = function(){
  people=[];
  let data = names.value;
  let splitData = data.split(',');
  for(let i = 0; i < splitData.length; i++)  {
    people.push({name:splitData[i],count:0})
  }
  shuffle();
}

const pick = function() {  
  let result = random();
  resDiv.innerText = people[result].name;
  people[result].count++;
  outputArray();
}

const outputArray = () => {
  history.innerHTML="";
  for(let i = 0; i < people.length;i++){
    let newHistory = document.createElement("li");
    let prefix= people[i].count >0?"💀":"😨"
    if (people[i].count >4) {
      prefix = "☠";
    }
    newHistory.innerText = prefix + people[i].count+ ": " + people[i].name;
    history.appendChild(newHistory);
  }
}

const random = () => 
Math.floor((crypto.getRandomValues(new Uint32Array(1))[0]/2**32)*people.length);

const shuffle = ()=> {
  people.sort(() => Math.random() - 0.5);
  outputArray();
}

pickButton.addEventListener("click",pick);
shuffleButton.addEventListener("click",shuffle);
generateButton.addEventListener("click",generate);

//generate();
outputArray();
shuffle();