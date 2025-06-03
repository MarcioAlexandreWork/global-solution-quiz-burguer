const corback= window.document.body
const corfont = window.document.body
const image = window.document.body
/* const slide = window.document. */
let resultado = parseInt(0)
var questoes=[0,0,0,0,0,0,0,0,0,0]




function iniciar(){
    sliderum.classList.remove('hidden');
    sliderdois.classList.add('hidden');
    slidertres.classList.add('hidden');
}


iniciar()



/* Trocar background */
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




/* Slides */
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












/* Funções dos botões  das questões*/

function correto(x){
    if(questoes[x]===0){
        resultado+=1
        console.log(resultado)
        let resum = window.document.getElementById('resum'+x)
        resum.innerText="Questão foi respondidada: True!"
        console.log(resultado)


        questoes[x]+=1
}
    else{
        let resum = window.document.getElementById('resum'+x)
        let index = document.getElementById('x'+x)
        resum.innerText="A questão já foi respondida, deseja substítui-la?"
        index.classList.remove('hidden')
    }

}

function errado(x){
    if(questoes[x]===0){
        console.log(resultado)
        let resum = window.document.getElementById('resum'+x)
        resum.innerText="Questão foi respondidada: True!"
        console.log(resultado)

        questoes[x]+=1
}
    else{
        let resum = window.document.getElementById('resum'+x)
        let index = document.getElementById('x'+x)
        resum.innerText="A questão já foi respondida, deseja substítui-la?"
        index.classList.remove('hidden')
    }

}
function substituir(x){
    let resum = window.document.getElementById('resum'+x)
    let index = document.getElementById('x'+x)
    questoes[x]-=1
    resultado-=1
    resum.innerText="Questão substituida, responda novamente"
    index.classList.add('hidden')
    console.log(resultado)
}





