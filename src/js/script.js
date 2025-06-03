const corback= window.document.body
const corfont = window.document.body
const image = window.document.body
/* const slide = window.document. */
let resultado = parseInt(0)
var contador = parseInt(0)
var questoes=[0,0,0,0,0,0,0,0,0,0]
var erradas=[]



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



/* acerto */
function correto(x){
    if(questoes[x]===0){
        let resum = window.document.getElementById('resum'+x)
        resum.innerText="Questão foi respondidada: True!"

        contador+=1
        resultado+=1
        questoes[x]+=1
    }



    else{
        let resum = window.document.getElementById('resum'+x)
        let index = document.getElementById('x'+x)
        resum.innerText="A questão já foi respondida, deseja substítui-la?"
        index.classList.remove('hidden')
    }

    console.log(contador)
}







/* Erro */
function errado(x){
    if(questoes[x]===0){
        let resum = window.document.getElementById('resum'+x)
        resum.innerText="Questão foi respondidada: True!"
        erradas.push(x+1)

        contador+=1
        questoes[x]+=1


    }



    else{
        let resum = window.document.getElementById('resum'+x)
        let index = document.getElementById('x'+x)
        resum.innerText="A questão já foi respondida, deseja substítui-la?"
        index.classList.remove('hidden')
    }

    console.log(contador)

}




/* Substituir */
function substituir(x){
    let resum = window.document.getElementById('resum'+x)
    let index = document.getElementById('x'+x)
    questoes[x]-=1
    resultado-=1
    contador-=1
    resum.innerText="Questão substituida, responda novamente"
    index.classList.add('hidden')

}








/* Mostrar */
function mostr(){
    if(contador==10){
        result.classList.remove('hidden')
        resultados.innerHTML=("Acertos: "+resultado)
        erros.innerHTML=("Questões erradas: "+erradas)
        fazer.classList.add('hidden')
    }
    else{
        fazer.classList.remove('hidden')
    }
}











/* Burger */


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    navList.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburgerMenu.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });
});



