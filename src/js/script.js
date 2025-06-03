const corback= window.document.body
const corfont = window.document.body
const image = window.document.body
let q1 = window.document.getElementById('questaoum')
/* const slide = window.document. */
let resultado = parseInt()




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

function questao1(){
    if(q1==1){
        resultado+=1
    }
    console.log(resultado)
    console.log(q1)

}
function teste1(){
    if(q1==='1'){
    console.log('Input funnfou')
}
    else{
        console.log('deu erro')
}
}
function teste2(){
    console.log('Input não funfou')
}




