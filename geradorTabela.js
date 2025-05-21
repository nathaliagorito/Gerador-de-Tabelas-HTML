window.onload = function()
{
    geraTabela("receitas", "th", ["Receitas Fáceis", "Receitas Difíceis"]);
    geraTabela("receitas", "td", ["Bigadeiro", "Empadão de Frango"]);

    geraTabela("tabela", "th", ["Cantores Femininos", "Cantores Masculinos"]);
    geraTabela("tabela", "td", ["Taylor Swift", "Justin Bieber"]);
};

function geraTabela(nomeTabela, elementoFilho, conteudoElemento)
{
    let elementoPai, tabela;

    if (!document.getElementById(nomeTabela))
    {
        tabela = document.createElement("table");
        const thead = document.createElement("thead"),
        tbody = document.createElement("tbody");
        
        const corpo = document.querySelector("body");

        corpo.appendChild(tabela);
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        tabela.id = nomeTabela;

        criaElementos();
    }
    else
    { tabela = document.getElementById(nomeTabela); criaElementos(); }

    function criaElementos()
    {
        switch (elementoFilho)
        {
            case "th": elementoPai = tabela.querySelector("thead"); break;
            case "td": elementoPai = tabela.querySelector("tbody"); break;
        }

        const tr = document.createElement("tr");

        elementoPai.appendChild(tr);

        for (let j = 0; j < conteudoElemento.length; j++)
        {
            const elemento = document.createElement(elementoFilho);
            elemento.textContent = conteudoElemento[j];

            tr.appendChild(elemento);
        }
    }
}