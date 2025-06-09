const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Saiu da escola e se depara com um chat que responde tudo e ainda gera imagens e áudios. Qual é a sua vibe?",
        alternativas: [
            {
                texto: "Isso é sinistro!",
                afirmacao: "Ficou com um pé atrás, pensando no que essa tecnologia pode aprontar."
            },
            {
                texto: "Isso é top!",
                afirmacao: "Quis logo aprender a usar essa IA no dia a dia."
            }
        ]
    },
    {
        enunciado: "A professora de tecnologia resolveu dar uma aula sobre IA. No final, ela pede um trampo sobre o uso da IA na sala. O que você faz?",
        alternativas: [
            {
                texto: "Uso uma ferramenta de busca que usa IA pra achar as informações e explicar tudo de boa.",
                afirmacao: "Conseguiu usar a IA pra buscar o que precisava."
            },
            {
                texto: "Escrevo o trampo com as ideias dos colegas e o que eu já sei.",
                afirmacao: "Preferiu confiar no seu próprio conhecimento e na troca de ideias."
            }
        ]
    },
    {
        enunciado: "Depois do trampo, rolou um debate sobre como a IA vai impactar o futuro. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defendo que a IA pode abrir novas portas e melhorar as habilidades da galera.",
                afirmacao: "Acredita que a inovação na IA pode criar novas oportunidades."
            },
            {
                texto: "Tô preocupado com a galera que pode perder o emprego pra máquina.",
                afirmacao: "Sua preocupação fez você querer discutir como usar a IA de forma ética."
            }
        ]
    },
    {
        enunciado: "No final, você precisa criar uma imagem que represente sua visão sobre a IA. E agora?",
        alternativas: [
            {
                texto: "Faço uma imagem no Paint, na moral.",
                afirmacao: "Percebeu que a galera ainda tá perdida nas ferramentas tradicionais e decidiu ajudar quem tá começando."
            },
            {
                texto: "Uso um gerador de imagem de IA pra fazer a parada.",
                afirmacao: "Facilitou a criação e agora ensina a galera que tem dificuldade em desenhar."
            }
        ]
    },
    {
        enunciado: "Tem um trampo de biologia pra entregar e um colega usou IA pra fazer tudo igual ao chat. O que você faz?",
        alternativas: [
            {
                texto: "Se escrever pro chat é contribuir, não tem problema usar o texto todo.",
                afirmacao: "Acabou se tornando dependente da IA pra tudo."
            },
            {
                texto: "A IA é avançada, mas tem que ficar esperto, porque máquina erra. Revisar e dar sua cara é essencial.",
                afirmacao: "Percebeu que a IA só reproduz o que foi programada e que os textos dela devem ser um apoio, não o final."
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
    caixaPerguntas.textContent = "Em 2077...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
