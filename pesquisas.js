const params = new URLSearchParams(location.search)
let id = params.get('id')
console.log(id)

const API_KEY = 'api_key=906630b6b95297f078ebc2b6b77d1036'
const BASE_URL = 'https://api.themoviedb.org/3/'

function exibeResultados() {
  let sectionTelaPesquisa = document.getElementById('pagina-pesquisa')
  let textoPesquisa = ''
  let dadosPesquisa = JSON.parse(this.responseText)

  if (dadosPesquisa.results.length == 0) {
    textoPesquisa =
      textoPesquisa +
      `
        <div class="itens-pesquisados">
            <p>Não foram encontrado resultados para a pesquisa feita!</p>
        </div>
    `
  } else {
    for (i = 0; i < dadosPesquisa.results.length; i++) {
      let retornoPesquisa = dadosPesquisa.results[i]
      localStorage.setItem('pesquisaFilmes', dadosPesquisa)
      textoPesquisa =
        textoPesquisa +
        `
            <div class="itens-pesquisados" style="padding-top: 2em">  
            <a href="detalhes_filme.html?id=${retornoPesquisa.id}"><img src="https://image.tmdb.org/t/p/w500${retornoPesquisa.poster_path}" class="card-img-top" width="200" alt="Filme"></a>
                    <div class="card-body">
                        <h5 class="card-title">${retornoPesquisa.title}</h5>
                        <p class="card-text">${retornoPesquisa.vote_average}</p>
                        <p class="card-text">${retornoPesquisa.release_date}</p>
                    </div>
            </div>
        `
    }
  }
  sectionTelaPesquisa.innerHTML = textoPesquisa
  document.getElementById('bloco1').innerHTML = ''
  document.getElementById('bloco2').innerHTML = ''
  document.getElementById('bloco3').innerHTML = ''
}

function exibeErro() {
  alert('Houve um erro com a requisição')
}

function executarPesquisa() {
  let query = document.getElementById('textoPesquisa').value

  let xhr = new XMLHttpRequest()
  xhr.onload = exibeResultados
  xhr.onerror = exibeErro
  xhr.open(
    'GET',
    `${BASE_URL}search/movie?${API_KEY}&language=pt-BR&query=${query}`,
    true
  )
  xhr.send()
}

document
  .getElementById('btnPesquisa')
  .addEventListener('click', executarPesquisa)
