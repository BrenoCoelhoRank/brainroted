const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você sai da escola, se depara com uma nova tecnologia: um chat capaz de responder praticamente qualquer dúvida, além de gerar imagens e áudios hiper-realistas. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é perturbador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "afirmação" 
            }
        ]
    },
    {
        enunciado: "Com a popularização dessa tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu preparar uma série de aulas sobre o tema. No final de uma delas, ela pede um trabalho sobre o uso da IA em sala de aula. O que você faz?",
        alternativas: [
            {
                texto: "Usa uma ferramenta com IA para buscar informações úteis e explicadas de forma simples, facilitando a escrita do trabalho.",
                afirmacao: "afirmação"
            },
            {
                texto: "Produz o trabalho a partir de conversas com colegas, algumas pesquisas na internet e seus próprios conhecimentos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Depois de entregar o trabalho, a professora promoveu um debate sobre como cada aluno realizou a pesquisa. Nesse momento, também surgiu a questão de como a IA pode impactar os empregos no futuro. Qual posição você defende?",
        alternativas: [
            {
                texto: "Acredito que a IA pode abrir novas oportunidades de emprego e aprimorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Tenho preocupação com quem pode perder empregos para máquinas e defendo medidas para proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem que representasse sua visão sobre a IA. Como decide fazer isso?",
        alternativas: [
            {
                texto: "Criar manualmente usando um programa simples como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Gerar uma imagem automaticamente usando uma IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Na semana seguinte, você tem um trabalho de biologia em grupo. O projeto está atrasado, e um colega decidiu usar uma IA para produzir quase tudo. O problema é que o texto ficou idêntico ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Acredito que escrever comandos já é contribuir, então não vejo problema em usar o texto da IA sem alterações.",
                afirmacao: "afirmação"
            },
            {
                texto: "A IA é útil, mas pode cometer erros. Por isso, revisar o material e acrescentar ideias próprias é fundamental.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
