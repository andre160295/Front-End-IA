function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos pelo ID.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //se campoPesquisa for uma string sem nada
  if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi digitado</p>"
    return
  }

  campoPesquisa = campoPesquisa.toUpperCase();

  // Inicializa uma string vazia para armazenar os resultados formatados.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada objeto (dado) no array 'dados'.
  for (let dado of dados) {
    titulo = dado.titulo.toUpperCase()
    descricao = dado.descricao.toUpperCase()
    tags = dado.tags.toUpperCase()
    //Se título includes campoPesquisa, então faça...
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      //Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_self">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="blank">Saiba mais sobre o ${dado.titulo}</a>
      </div>
      `;
    }
  }

  if(!resultados){
    resultados = "<p>Nenhuma Tecnologia foi encontrada</p>"
  }
  // Atribui o HTML gerado para o conteúdo da seção, substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}

const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoPesquisa = document.getElementById('botao-pesquisa');

campoPesquisa.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    pesquisar();
  }
});