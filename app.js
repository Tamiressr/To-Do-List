const container=document.querySelector(".container"); //acessa classe container
const listaAtividades=document.querySelector(".lista_atividades");//querySelector já retorna o objeto lista atividades
const input= document.querySelector(".input");
const erro=document.querySelector(".erro");
const botaoCadastra=document.querySelector(".botao_adc");
const botaoLimpar= document.querySelector(".botao_del_todos");
const paleta1=document.querySelector("#paleta1");
const paleta2=document.querySelector("#paleta2");
const paleta3=document.querySelector("#paleta3");

console.log(container);
console.log(listaAtividades);
console.log(input);
console.log(erro);
console.log(botaoCadastra);
console.log(paleta1);
console.log(paleta2);
console.log(paleta3);
console.log(paleta1.parentNode.children);
 

paleta1.addEventListener('click',()=> definePaleta('seagreen'));
paleta2.addEventListener('click',()=> definePaleta('slateblue'));
paleta3.addEventListener('click',()=> definePaleta('tomato'));
botaoCadastra.addEventListener('click',()=>cadastraAtividade());
botaoLimpar.addEventListener('click',()=>excluirAtividades());


function criaAtividade(){
    const atividade= document.createElement("div");
    //adiciona a classe de estilo ao elemento
    atividade.classList.add("atividade");
    const nomeAtividade= document.createElement("p");
    atividade.textContent=input.value;
    const botaoLimpar=document.createElement("button");
    botaoLimpar.textContent="Limpar";
    botaoLimpar.classList.add("botao_del");
    botaoLimpar.addEventListener('click',()=>removerAtividadeEspecifica(atividade));
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);
}
//função eventHeadler manipulador de eventos
//função que contem um codigo a ser executado na ocorrencia de um evento 
function definePaleta(cor){
    container.style.background=cor;
    listaAtividades.style.background=cor;
}

function removerAtividadeEspecifica(atividade){
    listaAtividades.removeChild(atividade);
}
function excluirAtividades(){
    const listaAtividade=document.querySelector(".lista_atividades");
    while(listaAtividade.firstElementChild){
        listaAtividade.removeChild(listaAtividade.firstElementChild);

    }
}

function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none";
        criaAtividade();
    }else{
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput(){
    input.value = "";
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();

    }
});