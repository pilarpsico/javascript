//p1//


const text = document.querySelector("p");

text.innerHTML = "Olá Mundo";
text.style.color = "#f33";
text.style.fontSize = "3.6rem";

//p2//
const texto2 = document.getElementById("segundo");

texto2.innerHTML = "tentando pegar id, deu certo";

texto2.classList.add("blue");

//p3//
const texto3 = document.getElementsByClassName(".classe");

texto3.innerHTML = "peguei será?";

//------------------------------------------------------------//
// container = div //
const container = document.getElementById("container");

container.style.backgroundColor = "#ff5";
container.style.width = "300px";
container.style.height = "300px";

const h2 = document.createElement("h2");
h2.innerHTML = "oie de novo, criando elemento";

container.appendChild(h2); // adiconando elemente ao container//

// olhando os nós da DOM, childNodes sãos os filhos 
//const main = document.getElementById("main");// chamando o id e criando const main para
// manipular na Dom e console//

// colocar ... console.log(main.childNodes) .... mostra no console os filhos


// são os pais parentNode. e cada vez que colocar .parentNode sobe mais na árvore DOM.
// colocar ... console.log(container.parentNode) ... mostra os pai//

// ----------------eventos onclick----------------------//

function saudacoes() {
    alert("ola, saudações");
}

function caixa() {
    
    const caixas = document.getElementById("caixa");

    caixas.style.display = "block";
    

    setTimeout(function(){
        caixas.style.display = "none";
    }, 3000)
    
};

//---------------------------------------------------//

function trocartexto() {
    const ttexto = document.querySelector(".mouse");

    ttexto.innerHTML = "troquei o texto";    
};
function voltartexto() {
    const voltart = document.querySelector(".mouse");

    voltart.innerHTML = "pilarpsico é meu mais novo username do momento.";
};

//-------------------------------------------------//

function enviar(){
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const sorvete = document.getElementById("sorvete");

    if(name.value == ""){
        alert("Preencha o campo do nome");
     }
    
     if(age.value >= 18) {
        alert("você é maior de idade")
     }else{
        alert("você é menor de idade")
     }
    
     if(sorvete.value == "") {
        alert("Preencha o campo para enviar")
     }
    
};

//--------------------------------------------------------//

// criando outra jeito de executar a função //
const form = document.getElementById("form");

form.addEventListener("submit", enviar);

function enviar() { 
   

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const sorvete = document.getElementById("sorvete");

    if(name.value == ""){
        alert("Preencha o campo do nome");
     }
          
     if(age.value >= 18) {
        alert("você é maior de idade")
     }else{
        alert("você é menor de idade")
     }
    
     if(sorvete.value == "") {
        alert("Preencha o campo para enviar")
     }
    
};

//------------------------------------------------------//

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("dizendo olá para addEventListener")
});

//----------------------------------------------------------//
