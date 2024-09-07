
function Pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    
    // Variável para mostrar o que foi digitado, sem modificar a string.
    let retornoCampoPesquisa = campoPesquisa;
    
    // caso essa condisão (nada for digitato no campo) seja verdade, o ```return``` vai para execução função nesta linha, dai pra baixo finaliza a execução.

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada por aqui :|</p>"
        return;
    }

    // metodo toLowerCase() transformar tudo em minusculo. Esse metodo tambem poderia ser colocado direto depois do ```value``` no getElementById. mas aqui fica mais claro o que cada elemento faz.
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultado = "";
    // essas variáveis são iniciadas fora do loop para evitar a redeclação a cada rodada do loop.
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        // método ```includes()```, é uma manipalador de strings que já faz uma busca no que vc passa como argumento e retorna um boleano.
        // console.log(dado.titulo.includes(campoPesquisa));

        // a variavel vai receber o objeto e vai transformar tudo em minusculo
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ){
            // ` O Operador de Template Literal  ${dado.titulo} para strings` 
            resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href= "${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // ```!``` esclamação é igual a negativo ou diferente. verifica essa operador
    // mostra se não foi encontrado com o que foi digitado na pesquisa.
    if (!resultado) {
        resultado = `<p>Nada foi encontrado com " ${retornoCampoPesquisa} "  : |</p>`;
    }
    section.innerHTML = resultado;
}
