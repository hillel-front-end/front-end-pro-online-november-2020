const NAMES = ["Vasya", "Katya", "Petya", "Kiril", "Galya", "Savelii", "Lisa", "Ivan", "Aleksandra"];

function getRandName(){
    return NAMES[Math.floor(Math.random()*NAMES.length)];
}

function getRand(min = 1500, max=3000) { 
    return Math.floor(Math.random()*(max-min) + min);
}