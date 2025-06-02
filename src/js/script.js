const corback= window.document.body
const corfont = window.document.body
const image = window.document.body
/* const slide = window.document. */





function iniciar(){
    sliderum.classList.remove('hidden');
    sliderdois.classList.add('hidden');
    slidertres.classList.add('hidden');
}

iniciar()

function clicarcin(){
    corback.style.background = 'dimgrey'
    corfont.style.color = 'white'
}
function clicarbra(){
    corback.style.background = 'white'
    corfont.style.color = 'black'
}
function clicarazul(){
    corback.style.background = 'rgb(65, 134, 195)'
    corfont.style.color = 'white'
}

function slide1(){
    sliderum.classList.remove('hidden');
    sliderdois.classList.add('hidden');
    slidertres.classList.add('hidden');
}
function slide2(){
    sliderum.classList.add('hidden');
    sliderdois.classList.remove('hidden');
    slidertres.classList.add('hidden');
}
function slide3(){
    sliderum.classList.add('hidden');
    sliderdois.classList.add('hidden');
    slidertres.classList.remove('hidden');
}




