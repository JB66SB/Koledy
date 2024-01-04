

const cichaNoc = document.querySelector('.cicha-noc');
const betlejem = document.querySelector('.betlejem');
const bogSieRodzi = document.querySelector('.bog-sie-rodzi');
const body = document.querySelector('body');

let betlejemAudio = new Audio('DzisiajWBetlejem.mp3');
let bogSieRodziAudio = new Audio('BogSieRodzi.mp3');
let cichaNocAudio = new Audio('CichaNoc.mp3');


function CichaNocKoleda(){
    betlejemAudio.pause();
    cichaNocAudio.pause();
    bogSieRodziAudio.pause();
    betlejem.classList.remove('visible');
    bogSieRodzi.classList.remove('visible');
    betlejem.classList.add('hidden');
    bogSieRodzi.classList.add('hidden');
    cichaNoc.classList.remove('hidden');
    cichaNoc.classList.add('visible');
    cichaNocAudio.currentTime = 0;
    cichaNocAudio.play();
}

function DzisiajWBetlejemKoleda(){
    betlejemAudio.pause();
    cichaNocAudio.pause();
    bogSieRodziAudio.pause();
    betlejem.classList.add('visible');
    bogSieRodzi.classList.remove('visible');
    betlejem.classList.remove('hidden');
    bogSieRodzi.classList.add('hidden');
    cichaNoc.classList.add('hidden');
    cichaNoc.classList.remove('visible');
    betlejemAudio.currentTime = 0;
    betlejemAudio.play();
}

function BogSieRodziKoleda(){
    betlejemAudio.pause();
    cichaNocAudio.pause();
    bogSieRodziAudio.pause();
    betlejem.classList.remove('visible');
    bogSieRodzi.classList.add('visible');
    betlejem.classList.add('hidden');
    bogSieRodzi.classList.remove('hidden');
    cichaNoc.classList.add('hidden');
    cichaNoc.classList.remove('visible');
    bogSieRodziAudio.currentTime = 0;
    bogSieRodziAudio.play();
}

function playOnLoad(){
    betlejemAudio.play(); 
    document.getElementById('play').style.display = 'none';
}
